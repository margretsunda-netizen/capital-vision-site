import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Lock } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Sectors", href: "#sectors" },
    { name: "Calculator", href: "#calculator" },
    { name: "Company", href: "#company" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/01357684-c9d4-4911-aa6e-20fe5588f594/aura-capital-logo-3285308d-1775433706046.webp" 
            alt="Aura Capital" 
            className="h-10 w-auto rounded-md"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Aura <span className="text-[#d4af37]">Capital</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-[#d4af37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d4af37] transition-colors">
            <Lock className="w-4 h-4" />
            Investor Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground py-2 border-b border-border last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-5 py-3 rounded-xl text-sm font-medium mt-4">
                <Lock className="w-4 h-4" />
                Investor Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;