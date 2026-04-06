import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

const portfolios = [
  {
    title: "Global Equities Alpha",
    category: "Diversified",
    risk: "Moderate",
    return: "14.2%",
    description: "A blend of large-cap tech and stable industrial sectors across North America and EU.",
    image: "https://images.unsplash.com/photo-1611974717483-5853dc24483b?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Venture Catalyst III",
    category: "Late-Stage VC",
    risk: "High",
    return: "22.8%",
    description: "Exclusive access to Series B and C funding rounds of disruptive fintech startups.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Sustainable Yield Bond",
    category: "Fixed Income",
    risk: "Low",
    return: "6.5%",
    description: "Green bonds supporting renewable energy infrastructure with quarterly dividends.",
    image: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif">Investment Portfolios</h2>
            <p className="text-muted-foreground">
              Select from our curated models or build a custom strategy with our senior wealth advisors.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold text-[#d4af37] group">
            View All Portfolios <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity" />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-0">
                    {item.category}
                  </Badge>
                  {item.featured && (
                    <Badge variant="secondary" className="bg-[#d4af37] text-black border-0 flex gap-1 font-bold">
                      <Star className="w-3 h-3 fill-current" /> Top Rated
                    </Badge>
                  )}
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Risk: {item.risk}</p>
                      <h3 className="text-2xl font-bold text-white leading-tight font-serif">{item.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[#d4af37] text-3xl font-black">{item.return}</p>
                      <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Est. ROI</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2 px-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;