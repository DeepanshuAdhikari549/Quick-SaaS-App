import { Check } from "lucide-react";

export const ClerkProvider = ({ children }) => <>{children}</>;

export const useClerk = () => ({
  openSignIn: () => console.log('Mock: openSignIn'),
  openSignUp: () => console.log('Mock: openSignUp'),
  signOut: () => console.log('Mock: signOut'),
});

export const useUser = () => ({
  user: {
    id: 'user_123',
    fullName: 'Test User',
    primaryEmailAddress: { emailAddress: 'test@example.com' },
    imageUrl: 'https://via.placeholder.com/40',
    publicMetadata: { creditBalance: 100 },
  },
  isLoaded: true,
  isSignedIn: true,
});

export const useAuth = () => ({
  getToken: async () => 'mock-token',
  isLoaded: true,
  isSignedIn: true,
});

export const SignIn = () => <div>SignIn Mock</div>;
export const SignUp = () => <div>SignUp Mock</div>;
export const UserButton = () => <div><img src="https://via.placeholder.com/40" alt="User" style={{borderRadius: '50%', width:'40px', height:'40px', border:'1px solid #e2e8f0'}}/></div>;
export const Protect = ({ children }) => <>{children}</>;
export const PricingTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div className="clean-card p-8 flex flex-col items-start bg-white">
      <h3 className="text-xl font-bold text-text-main mb-1">Starter</h3>
      <p className="text-text-muted mb-6 text-sm font-normal">Perfect for individuals and hobbyists.</p>
      <div className="text-4xl font-extrabold text-text-main mb-6">$0<span className="text-sm font-normal text-text-muted">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-1 w-full border-t border-border pt-6">
        <li className="flex items-center gap-3 text-text-main text-sm"><Check className="text-primary w-4 h-4"/> 10 AI Generations</li>
        <li className="flex items-center gap-3 text-text-main text-sm"><Check className="text-primary w-4 h-4"/> Basic Templates</li>
        <li className="flex items-center gap-3 text-text-main text-sm"><Check className="text-primary w-4 h-4"/> Standard Support</li>
      </ul>
      <button className="w-full py-2.5 rounded-lg border border-border text-text-main bg-surface hover:bg-border transition-colors font-medium text-sm">Current Plan</button>
    </div>
    
    <div className="clean-card p-8 flex flex-col items-start bg-white border-2 border-primary relative shadow-md">
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
      <h3 className="text-xl font-bold text-text-main mb-1">Pro</h3>
      <p className="text-text-muted mb-6 text-sm font-normal">For professionals and early-stage teams.</p>
      <div className="text-4xl font-extrabold text-text-main mb-6">$29<span className="text-sm font-normal text-text-muted">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-1 w-full border-t border-border pt-6">
        <li className="flex items-center gap-3 text-text-main text-sm"><Check className="text-primary w-4 h-4"/> Unlimited AI Generations</li>
        <li className="flex items-center gap-3 text-text-main text-sm"><Check className="text-primary w-4 h-4"/> Access to All Tools</li>
        <li className="flex items-center gap-3 text-text-main text-sm"><Check className="text-primary w-4 h-4"/> Priority 24/7 Support</li>
      </ul>
      <button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors font-medium text-sm">Upgrade to Pro</button>
    </div>
  </div>
);
