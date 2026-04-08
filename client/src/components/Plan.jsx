import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className="relative px-6 sm:px-12 xl:px-32 py-24 bg-surface flex flex-col items-center">
      <div className="text-center mb-16 relative z-10 w-full max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4 tracking-tight">
          Choose Your Plan
        </h2>
        <p className="text-text-muted text-lg font-medium">
          Start for free and upgrade anytime. Pick the perfect plan that fits
          your creative journey.
        </p>
      </div>
      
      <div className="w-full relative z-10 mt-4">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
