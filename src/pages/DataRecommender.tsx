import { DashboardLayout } from "@/components/DashboardLayout";
import { ChatInterface } from "@/components/ChatInterface";

const SUGGESTED = [
  "I'm planning a geothermal energy feasibility study in southern Finland",
  "What GTK datasets do I need for a gold exploration project in Lapland?",
  "I need environmental baseline data for a wind farm EIA in Ostrobothnia",
  "Which datasets support lithium exploration in the Kaustinen area?",
  "What data products are available for urban construction planning in Helsinki?",
];

export default function DataRecommender() {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-3rem)]">
        <ChatInterface
          toolName="GTK Data Product Recommender"
          genAILabel="Structured Output + Tools"
          suggestedQuestions={SUGGESTED}
          systemPromptKey="dataRecommender"
        />
      </div>
    </DashboardLayout>
  );
}
