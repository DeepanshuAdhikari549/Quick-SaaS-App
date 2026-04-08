import React from 'react';

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
export const UserButton = () => <div><img src="https://via.placeholder.com/40" alt="User" style={{borderRadius: '50%', width:'40px', height:'40px'}}/></div>;
export const Protect = ({ children }) => <>{children}</>;
export const PricingTable = () => <div>PricingTable Mock</div>;
