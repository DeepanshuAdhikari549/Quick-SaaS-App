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
      className={`z-20 w-64 bg-white border-r border-border flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 
        ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} 
        transition-all duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="my-8 w-full">
        {/* User Avatar */}
        <div className="relative w-fit mx-auto">
          <img
            src={user.imageUrl}
            alt="User avatar"
            className="w-16 h-16 rounded-full border border-border shadow-sm"
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
                `px-4 py-2.5 flex items-center gap-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-50 text-primary font-semibold"
                    : "text-text-muted hover:text-text-main hover:bg-surface"
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
      <div className="w-full border-t border-border p-4 px-6 flex items-center justify-between bg-white">
        <div
          onClick={openUserProfile}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <img src={user.imageUrl} className="w-10 h-10 rounded-full border border-border group-hover:border-primary transition-colors" alt="User" />
          <div>
            <h1 className="text-sm font-semibold text-text-main">{user.fullName}</h1>
            <p className="text-xs text-text-muted">
              <Protect plan="premium" fallback={<span className="font-medium text-text-muted">Free Plan</span>}>
                <span className="font-semibold text-primary">Premium Plan</span>
              </Protect>
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-5 h-5 text-text-muted hover:text-text-main transition-colors cursor-pointer"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
