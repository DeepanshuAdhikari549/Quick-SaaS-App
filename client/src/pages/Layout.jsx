import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-start h-screen bg-background pattern-bg font-sans text-text-main overflow-hidden">
      <nav className="w-full px-6 md:px-8 min-h-[64px] flex items-center justify-between border-b border-border bg-white/70 backdrop-blur-xl relative z-30 shadow-sm">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img src={assets.logo} alt="QuickSaaS Logo" className="h-7 group-hover:opacity-80 transition-opacity" />
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
        <div className="flex-1 relative overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-background pattern-bg">
      <SignIn />
    </div>
  );
};

export default Layout;
