import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  Home,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: Home },
  { to: "/ai/write-article", label: "AI Article Writer", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Title Generator", Icon: Hash },
  { to: "/ai/generate-images", label: "AI Image Generation", Icon: Image },
  { to: "/ai/remove-background", label: "Background Removal", Icon: Eraser },
  { to: "/ai/remove-object", label: "Object Removal", Icon: Scissors },
  { to: "/ai/review-resume", label: "Resume Reviewer", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: User },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <aside
      className={`z-20 w-64 bg-surface-dark border-r border-surface flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 
        ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} 
        transition-all duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="my-8 w-full">
        {/* User Avatar */}
        <div className="relative w-fit mx-auto group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity" />
          <img
            src={user.imageUrl}
            alt="User avatar"
            className="w-16 h-16 rounded-full relative z-10 border border-surface"
          />
        </div>
        <h1 className="mt-3 text-center font-semibold text-text-main">{user.fullName}</h1>

        {/* Navigation Links */}
        <nav className="px-4 mt-8 space-y-1 text-sm font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-4 py-3 flex items-center gap-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-text-muted hover:text-text-main hover:bg-surface border border-transparent"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-text-muted"}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom User Profile */}
      <div className="w-full border-t border-surface p-4 px-6 flex items-center justify-between bg-surface/50">
        <div
          onClick={openUserProfile}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <img src={user.imageUrl} className="w-10 h-10 rounded-full border border-surface/50 group-hover:border-primary/50 transition-colors" alt="User" />
          <div>
            <h1 className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">{user.fullName}</h1>
            <p className="text-xs text-text-muted">
              <Protect plan="premium" fallback={<span className="font-medium text-emerald-400">Free Plan</span>}>
                <span className="font-bold text-gradient">Premium Plan</span>
              </Protect>
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-5 h-5 text-gray-500 hover:text-red-400 transition-colors cursor-pointer"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
