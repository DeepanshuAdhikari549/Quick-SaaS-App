import { assets } from "../assets/assets";
import { Sparkles, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-8 w-full bg-surface-dark border-t border-surface relative overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3/4 h-1/2 bg-primary/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="flex flex-col md:flex-row justify-between w-full gap-16 border-b border-surface pb-12 relative z-10">
        {/* Brand Info */}
        <div className="md:max-w-md">
          <div className="flex items-center gap-3 cursor-pointer group mb-6">
            <div className="p-2 bg-gradient-to-tr from-primary to-secondary rounded-xl group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              Quick<span className="font-light text-text-muted">SaaS</span>
            </span>
          </div>
          <p className="text-text-muted text-sm font-light leading-relaxed">
            Unlock the full potential of AI with QuickSaaS. From crafting captivating articles to generating stunning visuals, our premium tools are designed to transform the way you create and work in 2026.
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-16">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-6 text-text-main text-lg">Company</h2>
            <ul className="text-sm space-y-4 font-light text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-xs">
            <h2 className="font-semibold text-text-main mb-6 text-lg">Stay Updated</h2>
            <div className="text-sm space-y-4">
              <p className="text-text-muted font-light leading-relaxed">
                Get the latest news, insights, and AI tips — delivered straight to your inbox every week.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <input
                  className="bg-background border border-surface text-text-main placeholder-text-muted focus:border-primary outline-none w-full h-10 rounded-lg px-4 font-light transition-all duration-300"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-primary hover:bg-primary-hover h-10 px-4 text-white rounded-lg cursor-pointer transition-colors flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-xs md:text-sm text-text-muted font-light">
        <p>© 2026 QuickSaaS Inc. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
