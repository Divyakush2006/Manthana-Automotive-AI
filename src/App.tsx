import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FleetHealth from "./pages/FleetHealth";
import Vehicles from "./pages/Vehicles";
import Predictions from "./pages/Predictions";
import Schedule from "./pages/Schedule";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fleet" element={<FleetHealth />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/security" element={<Security />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
