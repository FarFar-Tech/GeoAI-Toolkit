import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, Shield, Map, Database, Satellite, Sparkles, ArrowRight } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function SatelliteBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
        <div className="absolute inset-0 rounded-full border border-primary/[0.06] animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-[60px] rounded-full border border-accent/[0.06] animate-[spin_45s_linear_infinite_reverse]" />
        <div className="absolute inset-[120px] rounded-full border border-primary/[0.04] animate-[spin_80s_linear_infinite]" />
      </div>

      {/* Satellite 1 — outer orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-[spin_20s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <Satellite className="h-5 w-5 text-primary/30 animate-pulse" />
            <div className="absolute inset-0 h-5 w-5 bg-primary/20 rounded-full blur-md" />
          </div>
        </div>
      </div>

      {/* Satellite 2 — middle orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[680px] md:h-[680px] animate-[spin_15s_linear_infinite_reverse]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <Satellite className="h-4 w-4 text-accent/30 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 h-4 w-4 bg-accent/20 rounded-full blur-md" />
          </div>
        </div>
      </div>

      {/* Satellite 3 — inner orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[560px] md:h-[560px] animate-[spin_25s_linear_infinite]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <Satellite className="h-3.5 w-3.5 text-primary/20 animate-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute inset-0 h-3.5 w-3.5 bg-primary/15 rounded-full blur-sm" />
          </div>
        </div>
      </div>

      {/* Scan lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] animate-[spin_30s_linear_infinite]">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] animate-[spin_40s_linear_infinite_reverse]">
        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      </div>

      {/* Dots / data points */}
      {[
        { top: "20%", left: "15%", delay: "0s", size: "1.5px" },
        { top: "35%", left: "80%", delay: "2s", size: "2px" },
        { top: "70%", left: "25%", delay: "1s", size: "2px" },
        { top: "60%", left: "75%", delay: "3s", size: "1.5px" },
        { top: "15%", left: "60%", delay: "1.5s", size: "1px" },
        { top: "80%", left: "50%", delay: "0.5s", size: "2px" },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 animate-pulse"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: dot.delay,
            animationDuration: "3s",
          }}
        />
      ))}
    </div>
  );
}

const tools = [
  {
    title: "Mineral Prospectivity AI",
    description: "Explore mineral potential across Finland using GTK's mineral deposits, geochemistry, and prospectivity datasets.",
    icon: Gem,
    badge: "RAG + Domain Prompting",
    url: "/mineral-prospectivity",
    colorVar: "--geo-mineral",
  },
  {
    title: "Environmental Risk Screener",
    description: "Assess acid sulfate soils, groundwater vulnerability, peatland carbon, and construction suitability risks.",
    icon: Shield,
    badge: "RAG + Risk Classification",
    url: "/environmental-risk",
    colorVar: "--geo-forest",
  },
  {
    title: "Geological Map Interpreter",
    description: "Upload geological maps for VLM-powered interpretation of lithology, structures, and mineralization indicators.",
    icon: Map,
    badge: "Vision-Language Model",
    url: "/map-interpreter",
    colorVar: "--geo-water",
  },
  {
    title: "GTK Data Recommender",
    description: "Describe your project goals and get AI-recommended GTK datasets with relevance scores and justifications.",
    icon: Database,
    badge: "Structured Output + Tools",
    url: "/data-recommender",
    colorVar: "--geo-rock",
  },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="min-h-full">
        {/* Hero with satellite animation */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-6 md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--geo-water)/0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(var(--geo-mineral)/0.08),transparent_50%)]" />
          <SatelliteBackground />
          <div className="relative max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary animate-fade-in">
              <Satellite className="h-3.5 w-3.5" /> Generative AI for Geological Data
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              GTK GeoAI Toolkit
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
              Transforming GTK's geological and geospatial datasets into actionable insights
              for mineral exploration and environmental management with Generative AI.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12 pb-12">
          {/* Tool Cards */}
          <div className="grid gap-5 md:grid-cols-2 -mt-8">
            {tools.map((tool, i) => (
              <Link key={tool.url} to={tool.url} className="animate-fade-in" style={{ animationDelay: `${0.15 + i * 0.08}s`, animationFillMode: "both" }}>
                <Card className="h-full group relative overflow-hidden border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top right, hsl(var(${tool.colorVar}) / 0.06), transparent 60%)` }}
                  />
                  <CardHeader className="pb-3 relative">
                    <div className="flex items-start justify-between">
                      <div
                        className="h-11 w-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `hsl(var(${tool.colorVar}) / 0.12)`,
                          color: `hsl(var(${tool.colorVar}))`,
                        }}
                      >
                        <tool.icon className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-base mt-3 group-hover:text-primary transition-colors duration-300">{tool.title}</CardTitle>
                    <CardDescription className="text-xs leading-relaxed">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 relative">
                    <Badge variant="outline" className="text-[10px] border-border/60">
                      <Sparkles className="h-2.5 w-2.5 mr-1" />
                      {tool.badge}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Animated Stats */}
          <Card className="relative overflow-hidden border-border/60 bg-gradient-to-r from-primary/5 via-card to-accent/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />
            <CardContent className="p-8 relative">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                    <AnimatedCounter target={122} suffix="+" />
                  </p>
                  <p className="text-sm text-muted-foreground">GTK Data Products</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                    <AnimatedCounter target={4} />
                  </p>
                  <p className="text-sm text-muted-foreground">AI-Powered Tools</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
                    <AnimatedCounter target={3} />
                  </p>
                  <p className="text-sm text-muted-foreground">GenAI Techniques</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center space-y-2 pb-4">
            <p className="text-xs text-muted-foreground">
              Built with RAG, VLM, and structured tool-calling — powered by domain-specific geological knowledge from the
              <a href="https://hakku.gtk.fi/en/locations" target="_blank" rel="noopener" className="text-primary hover:underline ml-1">
                GTK Hakku Database
              </a>
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
