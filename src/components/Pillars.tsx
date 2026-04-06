import { motion } from "framer-motion";
import { Building2, Cpu, Leaf, BarChart3, ShieldAlert } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Premium Real Estate",
    description: "Access to high-yield commercial and residential properties in emerging global markets.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Cpu,
    title: "Technology & AI",
    description: "Venture capital into late-stage startups revolutionizing productivity and automation.",
    color: "bg-[#d4af37]/10 text-[#d4af37]",
  },
  {
    icon: Leaf,
    title: "ESG & Sustainability",
    description: "Investments that drive positive environmental impact while delivering robust returns.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
];

const Pillars = () => {
  return (
    <section id="sectors" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight font-serif">Our Investment Focus</h2>
          <p className="text-muted-foreground">
            We specialize in three core pillars that have consistently outperformed traditional indices over the last decade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border p-8 rounded-3xl hover:shadow-xl transition-shadow group"
            >
              <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillar.description}
              </p>
              <button className="text-[#d4af37] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn Strategy <BarChart3 className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <ShieldAlert className="w-8 h-8 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Risk Management is Our DNA</h4>
              <p className="text-white/60 text-sm">Sophisticated hedging strategies applied to every portfolio.</p>
            </div>
          </div>
          <button className="bg-[#d4af37] text-black px-8 py-3 rounded-xl font-bold whitespace-nowrap hover:bg-white transition-colors">
            View Risk Disclosure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pillars;