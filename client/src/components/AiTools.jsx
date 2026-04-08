import { useUser } from "@clerk/clerk-react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="relative px-6 sm:px-12 xl:px-32 py-32 bg-background">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">
          Unleash the <span className="text-gradient">Power of AI</span>
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Access a suite of intelligent tools to create, refine, and elevate
          your content — faster, smarter, and with unmatched precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="group glass-panel p-8 rounded-2xl hover-lift cursor-pointer overflow-hidden relative"
            onClick={() =>
              user ? navigate(tool.path) : toast.error("Sign in first to start creating.")
            }
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <div className="inline-flex p-4 rounded-xl relative">
                  <div 
                    className="absolute inset-0 opacity-20 rounded-xl blur-md"
                    style={{ background: `linear-gradient(to bottom right, ${tool.bg.from}, ${tool.bg.to})` }}
                  />
                  <tool.Icon
                    className="w-8 h-8 text-white relative z-10"
                    style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              
              <p className="text-text-muted leading-relaxed font-light flex-grow">
                {tool.description}
              </p>
              
              <div className="mt-8 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Launch Tool &rarr;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
