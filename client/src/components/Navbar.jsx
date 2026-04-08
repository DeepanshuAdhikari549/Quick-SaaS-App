import { ArrowRight, Sparkles } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const isHome = location.pathname === "/";

  return (
    <div className={`fixed z-50 w-full transition-all duration-300 ${isHome ? 'glass-nav' : 'bg-surface-dark border-b border-surface'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sm:px-12 xl:px-20">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
            navigate("/")
          }}
        >
          <div className="p-2 bg-gradient-to-tr from-primary to-secondary rounded-xl group-hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            Quick<span className="font-light text-text-muted">SaaS</span>
          </span>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-6">
          {user ? (
            <div className="p-1 rounded-full bg-surface border border-white/10 hover-lift">
              <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
            </div>
          ) : (
            <button
              onClick={openSignIn}
              className="group flex items-center gap-2 rounded-full text-sm font-medium cursor-pointer bg-primary/10 border border-primary/30 text-primary-hover px-6 py-2.5 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Get Access 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
