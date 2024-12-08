import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/ai-workshop" replace />} />
          <Route path="/ai-workshop" element={<Index />} />
          <Route path="/about" element={<div className="p-8 pt-24">About Tetra page coming soon...</div>} />
          <Route path="/contact" element={<div className="p-8 pt-24">Contact Us page coming soon...</div>} />
          {/* Catch-all route - redirect to /ai-workshop */}
          <Route path="*" element={<Navigate to="/ai-workshop" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;