import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Calculator from "./components/Calculator";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <PortfolioGrid />
        <Calculator />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;