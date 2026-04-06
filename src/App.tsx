import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import MineralProspectivity from "./pages/MineralProspectivity";
import EnvironmentalRisk from "./pages/EnvironmentalRisk";
import MapInterpreter from "./pages/MapInterpreter";
import DataRecommender from "./pages/DataRecommender";
import GeochemicalExplainer from "./pages/GeochemicalExplainer";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mineral-prospectivity" element={<MineralProspectivity />} />
          <Route path="/environmental-risk" element={<EnvironmentalRisk />} />
          <Route path="/map-interpreter" element={<MapInterpreter />} />
          <Route path="/data-recommender" element={<DataRecommender />} />
          <Route path="/geochemical-explainer" element={<GeochemicalExplainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
