import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClientsPage from "./pages/Clients";
import PoliciesPage from "./pages/Policies";
import PipelinePage from "./pages/Pipeline";
import SchedulePage from "./pages/Schedule";
import CommissionsPage from "./pages/Commissions";
import MessagesPage from "./pages/Messages";
import TeamChatPage from "./pages/TeamChat";
import DocumentsPage from "./pages/Documents";
import ReportsPage from "./pages/Reports";
import CarriersPage from "./pages/Carriers";
import ProductsPage from "./pages/Products";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/commissions" element={<CommissionsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/team-chat" element={<TeamChatPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/carriers" element={<CarriersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
