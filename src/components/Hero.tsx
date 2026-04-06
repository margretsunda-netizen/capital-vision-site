import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ShieldCheck, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with Generated Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/01357684-c9d4-4911-aa6e-20fe5588f594/hero-background-7abe7973-1775433707582.webp"
          alt="Modern Finance Architecture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 text-xs font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Exceeding Performance Benchmarks 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 font-serif">
            Invest in the Future of <span className="text-[#d4af37] italic">Sustainable</span> Wealth
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg">
            Experience institutional-grade asset management tailored for your growth. We combine AI-driven analytics with human intuition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d4af37] transition-colors shadow-lg"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-border"
            >
              Learn More
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">$4.2B+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Assets Managed</span>
            </div>
            <div className="w-[1px] h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">12.4%</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Avg. Annual Returns</span>
            </div>
            <div className="w-[1px] h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">85+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Global Markets</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
             <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/01357684-c9d4-4911-aa6e-20fe5588f594/growth-chart-abstract-89a0aa1a-1775433707287.webp" 
              alt="Growth Chart" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Floating Security Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3 z-20"
          >
            <div className="bg-emerald-500/10 p-2 rounded-full">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm font-bold">SEC Registered</p>
              <p className="text-[10px] text-muted-foreground">Certified Asset Management</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-xl border border-border flex items-center gap-3 z-20"
          >
            <div className="bg-blue-500/10 p-2 rounded-full">
              <Globe className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-bold">Global Reach</p>
              <p className="text-[10px] text-muted-foreground">Investing in 15+ Jurisdictions</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;