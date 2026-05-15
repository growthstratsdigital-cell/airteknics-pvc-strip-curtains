import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

/**
 * Root application component for Airteknics PVC Strip Curtains Landing Page.
 * Configures the essential B2B lead generation infrastructure including:
 * - React Query for data handling
 * - React Router for single-page routing
 * - Global UI providers (Toaster, Tooltip)
 * - Professional branding via Layout wrapper
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            {/* 
              Primary Landing Page Route
              The Layout component provides the Airteknics Header/Footer 
              while Home contains the PVC Strip Curtains specific LP content.
            */}
            <Route
              path={ROUTE_PATHS.HOME}
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            {/* 
              Catch-all route: Redirects to Home for single-page conversion focus.
              In a B2B LP context, we minimize exit points to maximize lead capture.
            */}
            <Route
              path="*"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
        
        {/* Feedback components for form submissions and interactions */}
        <Toaster />
        <Sonner 
          position="top-right" 
          closeButton 
          richColors 
          expand={false}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
