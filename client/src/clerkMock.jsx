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
export const UserButton = () => <div><img src="https://via.placeholder.com/40" alt="User" style={{borderRadius: '50%', width:'40px', height:'40px', border:'1px solid rgba(255,255,255,0.2)'}}/></div>;
export const Protect = ({ children }) => <>{children}</>;
export const PricingTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div className="glass-panel p-8 rounded-2xl border border-surface flex flex-col hover-lift">
      <h3 className="text-2xl font-bold text-text-main mb-2">Starter</h3>
      <p className="text-text-muted mb-6 font-light">Perfect for individuals and hobbyists.</p>
      <div className="text-4xl font-extrabold text-white mb-6">$0<span className="text-lg font-medium text-text-muted">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-1">
        <li className="flex items-center gap-3 text-text-muted"><Check className="text-primary w-5 h-5"/> 10 AI Generations</li>
        <li className="flex items-center gap-3 text-text-muted"><Check className="text-primary w-5 h-5"/> Basic Templates</li>
        <li className="flex items-center gap-3 text-text-muted"><Check className="text-primary w-5 h-5"/> Standard Support</li>
      </ul>
      <button className="w-full py-3 rounded-lg border border-surface text-text-main hover:bg-surface transition-colors font-medium">Current Plan</button>
    </div>
    
    <div className="glass-panel p-8 rounded-2xl border border-primary relative flex flex-col hover-lift shadow-[0_0_30px_rgba(139,92,246,0.15)]">
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
      <h3 className="text-2xl font-bold text-text-main mb-2">Pro</h3>
      <p className="text-text-muted mb-6 font-light">For professionals and early-stage teams.</p>
      <div className="text-4xl font-extrabold text-white mb-6">$29<span className="text-lg font-medium text-text-muted">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-1">
        <li className="flex items-center gap-3 text-text-main"><Check className="text-primary w-5 h-5"/> Unlimited AI Generations</li>
        <li className="flex items-center gap-3 text-text-main"><Check className="text-primary w-5 h-5"/> Access to All Tools</li>
        <li className="flex items-center gap-3 text-text-main"><Check className="text-primary w-5 h-5"/> Priority 24/7 Support</li>
      </ul>
      <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors font-bold">Upgrade to Pro</button>
    </div>
  </div>
);
