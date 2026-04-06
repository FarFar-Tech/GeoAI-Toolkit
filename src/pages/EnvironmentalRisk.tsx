import { DashboardLayout } from "@/components/DashboardLayout";
import { ChatInterface } from "@/components/ChatInterface";

const SUGGESTED = [
  "What environmental risks should be assessed before construction in coastal Ostrobothnia?",
  "How do acid sulfate soils affect water quality in western Finland?",
  "Estimate peatland carbon storage implications for a wind farm in Kainuu",
  "What GTK datasets help assess groundwater vulnerability for a new industrial site?",
  "What are the geotechnical risks of building on clay areas in southern Finland?",
];

export default function EnvironmentalRisk() {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-3rem)]">
        <ChatInterface
          toolName="Environmental Risk Screener"
          genAILabel="RAG + Risk Classification"
          suggestedQuestions={SUGGESTED}
          systemPromptKey="environmentalRisk"
        />
      </div>
    </DashboardLayout>
  );
}
