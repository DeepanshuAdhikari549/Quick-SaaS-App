import { ArrowRight } from "lucide-react";
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
    <div className={`fixed z-50 w-full transition-all duration-300 ${isHome ? 'nav-blur' : 'bg-white border-b border-border'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 sm:px-12 xl:px-20">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }); 
            navigate("/")
          }}
        >
          <img src={assets.logo} alt="QuickSaaS Logo" className="h-8 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-6">
          {user ? (
            <div className="p-0.5 rounded-full bg-surface border border-border">
              <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
            </div>
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 rounded-full text-sm font-medium cursor-pointer bg-text-main text-white px-6 py-2.5 hover:bg-gray-800 transition-colors shadow-sm"
            >
              Get Started 
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
