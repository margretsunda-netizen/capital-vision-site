import { Github, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="company" className="bg-[#0a0a0a] text-zinc-400 py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/01357684-c9d4-4911-aa6e-20fe5588f594/aura-capital-logo-3285308d-1775433706046.webp" 
                alt="Aura Capital" 
                className="h-10 w-auto grayscale brightness-200"
              />
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Aura <span className="text-[#d4af37]">Capital</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Empowering global investors with intelligent asset management and sustainable growth strategies since 2012.
            </p>
            <div className="flex gap-5">
              <Twitter className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
              <Github className="w-5 h-5 hover:text-[#d4af37] cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Investment Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Wealth Management</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Private Equity</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Sustainable Energy Fund</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Real Estate REITs</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">AI-Driven Hedge Fund</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">About Our Team</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Impact Reporting</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Career Opportunities</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Press & Media</li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-[#d4af37]" />
                <span className="group-hover:text-white transition-colors">invest@auracapital.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span className="group-hover:text-white transition-colors">+1 (800) AURA-INV</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-1" />
                <span className="group-hover:text-white transition-colors leading-relaxed">1200 Financial Tower,<br />Wall St, New York, NY 10005</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 Aura Capital Management. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-white transition-colors">Regulatory Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;