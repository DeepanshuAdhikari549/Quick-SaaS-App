import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className="relative px-6 sm:px-12 xl:px-32 py-32 bg-background flex flex-col items-center">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10 w-full max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
        <p className="text-text-muted text-lg font-light leading-relaxed">
          Start for free and upgrade anytime. Pick the perfect plan that fits
          your creative journey.
        </p>
      </div>
      
      <div className="w-full relative z-10">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
