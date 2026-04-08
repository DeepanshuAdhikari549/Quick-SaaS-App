import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-8 w-full bg-white border-t border-border">
      <div className="flex flex-col md:flex-row justify-between w-full gap-16 border-b border-border pb-12">
        {/* Brand Info */}
        <div className="md:max-w-md">
          <div className="flex items-center gap-2 cursor-pointer group mb-6">
            <img src={assets.logo} alt="QuickSaaS Logo" className="h-8" />
          </div>
          <p className="text-text-muted text-sm font-normal leading-relaxed">
            Unlock the full potential of your team with QuickSaaS. We build intuitive, powerful tools to streamline workflows and boost daily productivity without the steep learning curves.
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-16">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-6 text-text-main text-base">Company</h2>
            <ul className="text-sm space-y-4 font-normal text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="max-w-xs">
            <h2 className="font-semibold text-text-main mb-6 text-base">Stay Updated</h2>
            <div className="text-sm space-y-4">
              <p className="text-text-muted font-normal leading-relaxed">
                Get the latest news and productivity tips delivered straight to your inbox.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <input
                  className="bg-white border border-border text-text-main placeholder-text-muted focus:border-primary outline-none w-full h-10 rounded-lg px-4 font-normal transition-all duration-300"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-text-main hover:bg-gray-800 h-10 px-4 text-white rounded-lg cursor-pointer transition-colors flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted font-normal">
        <p>© 2026 QuickSaaS Inc. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
