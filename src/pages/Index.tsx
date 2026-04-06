import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, Shield, Map, Database, FlaskConical, Sparkles, ArrowRight } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const tools = [
  {
    title: "Mineral Prospectivity AI",
    description: "Explore mineral potential across Finland using GTK's mineral deposits, geochemistry, and prospectivity datasets.",
    icon: Gem,
    badge: "RAG + Domain Prompting",
    url: "/mineral-prospectivity",
    color: "hsl(var(--geo-mineral))",
  },
  {
    title: "Environmental Risk Screener",
    description: "Assess acid sulfate soils, groundwater vulnerability, peatland carbon, and construction suitability risks.",
    icon: Shield,
    badge: "RAG + Risk Classification",
    url: "/environmental-risk",
    color: "hsl(var(--geo-forest))",
  },
  {
    title: "Geological Map Interpreter",
    description: "Upload geological maps for VLM-powered interpretation of lithology, structures, and mineralization indicators.",
    icon: Map,
    badge: "Vision-Language Model",
    url: "/map-interpreter",
    color: "hsl(var(--geo-water))",
  },
  {
    title: "GTK Data Recommender",
    description: "Describe your project goals and get AI-recommended GTK datasets with relevance scores and justifications.",
    icon: Database,
    badge: "Structured Output + Tools",
    url: "/data-recommender",
    color: "hsl(var(--geo-rock))",
  },
  {
    title: "Geochemical Anomaly Explainer",
    description: "Input element concentrations and get AI interpretation relative to Finnish background levels.",
    icon: FlaskConical,
    badge: "RAG + Quantitative",
    url: "/geochemical-explainer",
    color: "hsl(var(--geo-earth))",
  },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-10">
        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" /> Generative AI for Geological Data
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            GTK GeoAI Toolkit
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforming GTK's geological and geospatial datasets into actionable insights 
            for mineral exploration and environmental management with Generative AI.
          </p>
        </div>

        {/* Tool Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.url} to={tool.url}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div
                      className="h-10 w-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: tool.color + "20", color: tool.color }}
                    >
                      <tool.icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-base mt-3">{tool.title}</CardTitle>
                  <CardDescription className="text-xs">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant="outline" className="text-[10px]">
                    <Sparkles className="h-2.5 w-2.5 mr-1" />
                    {tool.badge}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Knowledge Base Info */}
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">122+</p>
                <p className="text-xs text-muted-foreground">GTK Data Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">AI-Powered Tools</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">GenAI Techniques</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Built with RAG, VLM, and structured tool-calling — powered by domain-specific geological knowledge from the 
            <a href="https://hakku.gtk.fi/en/locations" target="_blank" rel="noopener" className="text-primary hover:underline ml-1">
              GTK Hakku Database
            </a>
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
