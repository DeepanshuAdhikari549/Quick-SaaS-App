import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, ShieldCheck } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-20">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 text-center flex flex-col items-center w-full max-w-5xl mx-auto">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/30 shadow-[0_0_15px_rgba(139,92,246,0.15)] animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-text-main">Welcome to the Future of Built-In Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">
          Build the <br className="hidden sm:block"/>
          <span className="text-gradient drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">Ultimate SaaS</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Elevate your platform with cutting-edge AI integrations. Generate mind-blowing content, master images, and redefine user productivity in milliseconds.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            onClick={() => navigate("/ai")}
            className="group relative flex items-center justify-center gap-2 bg-text-main text-background font-semibold px-8 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Zap className="w-5 h-5" />
            <span>Launch Workspace</span>
          </button>
          
          <button className="group flex items-center justify-center gap-2 glass-panel text-text-main font-medium px-8 py-4 rounded-xl hover:bg-surface-dark transition-all duration-300 w-full sm:w-auto">
            <span>Explore Features</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background object-cover grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 hover:z-10"
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="User"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-text-muted font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <p>Trusted by 10,000+ forward-thinking teams</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
