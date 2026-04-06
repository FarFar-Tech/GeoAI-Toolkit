import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2, FlaskConical } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ELEMENTS = ["Cu", "Au", "Ni", "Zn", "Cr", "Co", "As", "Pb", "Li", "Mo"];

export default function GeochemicalExplainer() {
  const [sampleType, setSampleType] = useState("till");
  const [concentrations, setConcentrations] = useState<Record<string, string>>({});
  const [analysis, setAnalysis] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    const filled = Object.entries(concentrations).filter(([, v]) => v && parseFloat(v) > 0);
    if (filled.length === 0) return;

    const prompt = `Analyze these geochemical concentrations from a ${sampleType} sample:\n${
      filled.map(([el, val]) => `- ${el}: ${val}`).join("\n")
    }\n\nCompare against Finnish background levels, classify anomaly status, suggest geological sources, and recommend follow-up.`;

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
          messages: [{ role: "user", content: prompt }],
          toolKey: "geochemicalExplainer",
        }),
      });

      if (!resp.ok) throw new Error(`Error ${resp.status}`);

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
            if (delta) { content += delta; setAnalysis(content); }
          } catch { buffer = line + "\n" + buffer; break; }
        }
      }
    } catch (err: any) {
      setAnalysis(`⚠️ ${err.message || "Analysis failed."}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Geochemical Anomaly Explainer</h2>
          <Badge variant="secondary" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" />RAG + Quantitative
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <FlaskConical className="h-4 w-4" />Input Concentrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-xs">Sample Type</Label>
                <Select value={sampleType} onValueChange={setSampleType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="till">Till (glacial sediment)</SelectItem>
                    <SelectItem value="streamSediment">Stream Sediment</SelectItem>
                    <SelectItem value="bedrock">Bedrock</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ELEMENTS.map((el) => (
                  <div key={el}>
                    <Label className="text-xs">{el} ({el === "Au" ? "ppb" : "ppm"})</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={concentrations[el] || ""}
                      onChange={(e) => setConcentrations(prev => ({ ...prev, [el]: e.target.value }))}
                    />
                  </div>
                ))}
              </div>

              <Button onClick={handleAnalyze} disabled={isLoading} className="w-full">
                {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Analyzing...</> : <><Sparkles className="h-4 w-4 mr-2" />Analyze Concentrations</>}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              {analysis ? (
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
                  Enter element concentrations and click Analyze
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
