// src/App.tsx
import React from "react"; // useState va useEffect endi kerak emas, shuning uchun faqat React qoldi
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnimatedBackground from "./components/AnimatedBackground";
// import Preloader from "./components/Preloader"; // Bu qator o'chirildi

const queryClient = new QueryClient();

const App = () => {
  // const [showPreloader, setShowPreloader] = useState(true); // Bu qator o'chirildi

  // useEffect(() => { // Bu blok o'chirildi
  //   const timer = setTimeout(() => {
  //     setShowPreloader(false);
  //   }, 7500);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* {showPreloader && <Preloader />} // Bu qator o'chirildi */}

        <AnimatedBackground />

        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;