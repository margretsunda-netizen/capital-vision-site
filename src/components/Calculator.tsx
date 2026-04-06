import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Calculator as CalcIcon, Info } from "lucide-react";

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(8);

  const calculateFutureValue = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    
    // Future value of lump sum
    const fvLumpSum = initialInvestment * Math.pow(1 + monthlyRate, months);
    
    // Future value of annuity (monthly contributions)
    const fvAnnuity = monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    return Math.round(fvLumpSum + fvAnnuity);
  };

  const futureValue = calculateFutureValue();
  const totalContributions = initialInvestment + (monthlyContribution * years * 12);
  const totalInterest = futureValue - totalContributions;

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[#d4af37] mb-4">
              <CalcIcon className="w-6 h-6" />
              <span className="font-bold uppercase tracking-widest text-sm">Growth Estimator</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight font-serif">Visualize Your Wealth Trajectory</h2>
            <p className="text-muted-foreground mb-10">
              Our compounding calculator demonstrates the potential of consistent investment combined with institutional-grade returns.
            </p>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground">Initial Investment ($)</label>
                  <span className="text-[#d4af37] font-bold">${initialInvestment.toLocaleString()}</span>
                </div>
                <Slider
                  value={[initialInvestment]}
                  onValueChange={(v) => setInitialInvestment(v[0])}
                  max={1000000}
                  step={1000}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground">Monthly Contribution ($)</label>
                  <span className="text-[#d4af37] font-bold">${monthlyContribution.toLocaleString()}</span>
                </div>
                <Slider
                  value={[monthlyContribution]}
                  onValueChange={(v) => setMonthlyContribution(v[0])}
                  max={50000}
                  step={100}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Years</label>
                  <Input 
                    type="number" 
                    value={years} 
                    onChange={(e) => setYears(Number(e.target.value))} 
                    className="h-12 border-border bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Expected Return (%)</label>
                  <Input 
                    type="number" 
                    value={rate} 
                    onChange={(e) => setRate(Number(e.target.value))} 
                    className="h-12 border-border bg-background"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 p-8 md:p-12 rounded-[2.5rem] border border-border shadow-xl"
          >
            <div className="text-center mb-10">
              <span className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">Projected Value in {years} Years</span>
              <div className="text-5xl md:text-6xl font-bold text-foreground mt-2 font-serif">
                ${futureValue.toLocaleString()}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-background rounded-2xl border border-border">
                <span className="text-muted-foreground font-medium">Total Contributions</span>
                <span className="font-bold text-foreground">${totalContributions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-background rounded-2xl border border-border">
                <span className="text-muted-foreground font-medium">Estimated Profit</span>
                <span className="font-bold text-emerald-500">+${totalInterest.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4 p-4 bg-[#d4af37]/5 border border-[#d4af37]/10 rounded-2xl">
              <Info className="w-6 h-6 text-[#d4af37] shrink-0" />
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                *Projections are for illustrative purposes and based on historical performance. Investments carry risk and returns are not guaranteed.
              </p>
            </div>

            <button className="w-full mt-8 bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#d4af37] transition-colors">
              Download Full Forecast
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;