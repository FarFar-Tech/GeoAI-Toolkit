import { useState, useRef } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Sparkles, Loader2, Image as ImageIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

const SAMPLE_MAPS = [
  { name: "Bedrock 1:1M — Southern Finland", url: "https://gtkdata.gtk.fi/Kalliopera/viewer.html" },
  { name: "Bedrock 1:200k — Lapland", url: "https://gtkdata.gtk.fi/Kalliopera/viewer.html" },
];

export default function MapInterpreter() {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImage(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const analyzeMap = async () => {
    if (!image) return;
    setIsLoading(true);
    setAnalysis("");

    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gtk-chat`;
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: [
            { type: "text", text: "Analyze this geological map. Identify lithological units, structural features, potential mineralization indicators, and recommend relevant GTK datasets for further analysis." },
            { type: "image_url", image_url: { url: image } },
          ]}],
          toolKey: "mapInterpreter",
          multimodal: true,
        }),
      });

      if (!resp.ok) throw new Error("Error " + resp.status);

      const reader = resp.body?.getReader();
      if (!reader) throw new Error("No stream");
      const decoder = new TextDecoder();
      let buffer = "";
      let content = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              content += delta;
              setAnalysis(content);
            }
          } catch { buffer = line + "\n" + buffer; break; }
        }
      }
    } catch (err: any) {
      setAnalysis("⚠️ " + (err.message || "Analysis failed. Please check your connection and try again."));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Geological Map Interpreter</h2>
          <Badge variant="secondary" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" />VLM
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Upload a geological map image for AI-powered interpretation using a Vision-Language Model.
          Inspired by GeoMap-Agent (PEACE framework).
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              {image ? (
                <div className="space-y-3">
                  <img src={image} alt="Uploaded map" className="rounded-lg w-full max-h-[400px] object-contain border border-border" />
                  <div className="flex gap-2">
                    <Button onClick={() => fileRef.current?.click()} variant="outline" size="sm">Change image</Button>
                    <Button onClick={analyzeMap} disabled={isLoading} size="sm">
                      {isLoading ? <><Loader2 className="h-3 w-3 animate-spin mr-1" />Analyzing...</> : <><Sparkles className="h-3 w-3 mr-1" />Analyze Map</>}
                    </Button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="w-full h-64 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-muted/50 transition-colors"
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Upload a geological map image</span>
                  <span className="text-xs text-muted-foreground">(PNG, JPG, TIFF)</span>
                </button>
              )}

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Or explore GTK map viewers:</p>
                {SAMPLE_MAPS.map((m, i) => (
                  <a key={i} href={m.url} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs text-primary hover:underline mb-1">
                    <ImageIcon className="h-3 w-3" />{m.name}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analysis */}
          <Card>
            <CardContent className="p-6">
              {analysis ? (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
                  Upload a map and click "Analyze" to get AI interpretation
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
