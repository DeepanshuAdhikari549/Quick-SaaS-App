import { useUser } from "@clerk/clerk-react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="relative px-6 sm:px-12 xl:px-32 py-24 bg-surface pattern-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4 tracking-tight">
          Everything You Need to Build Fast
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto font-medium">
          Access a suite of intelligent tools to create, refine, and elevate
          your content with zero friction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="clean-card p-6 cursor-pointer flex flex-col group"
            onClick={() =>
              user ? navigate(tool.path) : toast.error("Sign in first to start creating.")
            }
          >
            <div className="mb-6 inline-flex p-3 rounded-xl bg-indigo-50 border border-indigo-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <tool.Icon
                className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300"
              />
            </div>
            
            <h3 className="text-lg font-bold text-text-main mb-2">
              {tool.title}
            </h3>
            
            <p className="text-text-muted text-sm flex-grow font-medium leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
