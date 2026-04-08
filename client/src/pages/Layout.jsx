import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen bg-background text-text-main overflow-hidden">
      <nav className="w-full px-6 md:px-8 min-h-[64px] flex items-center justify-between border-b border-surface bg-surface-dark/95 backdrop-blur-md relative z-30">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="p-1.5 bg-gradient-to-tr from-primary to-secondary rounded-lg group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors hidden sm:block">
            Quick<span className="font-light text-text-muted">SaaS</span>
          </span>
        </div>
        
        {sidebar ? (
          <X
            className="w-6 h-6 text-text-muted hover:text-text-main cursor-pointer transition-colors sm:hidden"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-text-muted hover:text-text-main cursor-pointer transition-colors sm:hidden"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>
      
      <div className="flex-1 w-full flex h-[calc(100vh-64px)] relative">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 relative overflow-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-dark via-background to-background">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-background">
      <SignIn />
    </div>
  );
};

export default Layout;
