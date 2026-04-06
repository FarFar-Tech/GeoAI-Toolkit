import { DashboardLayout } from "@/components/DashboardLayout";
import { ChatInterface } from "@/components/ChatInterface";

const SUGGESTED = [
  "What critical minerals have been identified in the Kuusamo schist belt?",
  "Compare geochemical signatures of Cu-Au deposits in Pohjanmaa vs. Lapland",
  "Which GTK datasets should I combine for greenfield gold exploration in central Finland?",
  "What is the lithium potential in Finnish spodumene pegmatites?",
  "Explain the Outokumpu-type mineralization and relevant GTK data",
];

export default function MineralProspectivity() {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-3rem)]">
        <ChatInterface
          toolName="Mineral Prospectivity AI"
          genAILabel="RAG + Domain Prompting"
          suggestedQuestions={SUGGESTED}
          systemPromptKey="mineralProspectivity"
        />
      </div>
    </DashboardLayout>
  );
}
