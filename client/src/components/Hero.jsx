import { useNavigate } from "react-router-dom";
import { Sparkles, PlayCircle, Star } from "lucide-react";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-background pattern-bg overflow-hidden pt-24 pb-16">
      
      {/* Soft glowing orb in light mode to provide a splash of color without heavy neon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 text-center flex flex-col items-center w-full max-w-4xl mx-auto mt-12">
        
        {/* Soft Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-text-main">The Ultimate AI Assistant Studio</span>
        </div>

        {/* Premium Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-main mb-6 leading-[1.1]">
          Supercharge Your Workflow
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Create compelling content and generate stunning images in seconds. A powerful suite designed for real humans, powered by next-generation intelligence.
        </p>
        
        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigate("/ai")}
            className="flex items-center justify-center gap-2 bg-text-main text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-slate-200 w-full sm:w-auto"
          >
            Start Creating Free
          </button>
          
          <button className="flex items-center justify-center gap-2 bg-white border border-border text-text-main font-semibold px-8 py-3.5 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all w-full sm:w-auto shadow-sm">
            <PlayCircle className="w-5 h-5 text-primary" />
            <span>See how it works</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm grayscale hover:grayscale-0 transition-all duration-300 hover:z-10 hover:scale-110"
                src={`https://i.pravatar.cc/100?img=${i + 20}`}
                alt="User"
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-sm text-text-muted font-medium">Loved by 10,000+ creators globally</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
