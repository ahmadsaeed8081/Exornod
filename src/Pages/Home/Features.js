import React from "react";
import { CheckIcon } from "../../assets/Icons";

const Features = () => {
  return (
    <div className="features-section flex w-full h-full py-10 relative">
      <div className="box-shadow" />
      <div className="wrap wrapWidth flex flex-col items-center justify-center">
        <h1 className="zen-title-w">
          Unique <span className="zen-title-b">Features</span>
        </h1>
        <div className="flex flex-col sm:w-4/5 w-full py-10 gap-8">
          <div className="flex gap-4 border-themeColor border-b border-l p-3">
            <div className="icon flex items-center justify-center h-6 w-6">
              <CheckIcon />
            </div>
            <h1 className="zen-title-w !text-base leading-6">
              Smart contracts automate processes, eradicating human errors and
              inefficiencies, ensuring seamless operations.
            </h1>
          </div>
          <div className="flex gap-4 border-themeColor border-b border-l p-3">
            <div className="icon flex items-center justify-center h-6 w-6">
              <CheckIcon />
            </div>
            <h1 className="zen-title-w !text-base leading-6">
              Exclusive access to promising, innovative ventures for stable
              progress and lucrative returns.
            </h1>
          </div>
          <div className="flex gap-4 border-themeColor border-b border-l p-3">
            <div className="icon flex items-center justify-center h-6 w-6">
              <CheckIcon />
            </div>
            <h1 className="zen-title-w !text-base leading-6">
              Certified projects mitigate investment risks, entailing a
              money-back program for venture investors within our ecosystem.
            </h1>
          </div>
          <div className="flex gap-4 border-themeColor border-b border-l p-3">
            <div className="icon flex items-center justify-center h-6 w-6">
              <CheckIcon />
            </div>
            <h1 className="zen-title-w !text-base leading-6">
              Exclusive access to your actions and information ensures absolute
              privacy and security.
            </h1>
          </div>
          <div className="flex gap-4 border-themeColor border-b border-l p-3">
            <div className="icon flex items-center justify-center h-6 w-6">
              <CheckIcon />
            </div>
            <h1 className="zen-title-w !text-base leading-6">
              *Strategic vesting for team and liquidity pool mitigating selling
              pressure for sustainable growth.
            </h1>
          </div>
          <div className="flex gap-4 border-themeColor border-b border-l p-3">
            <div className="icon flex items-center justify-center h-6 w-6">
              <CheckIcon />
            </div>
            <h1 className="zen-title-w !text-base leading-6">
              NOD Holders reserved the largest 25% Reward pool for exclusive
              benefits
            </h1>
          </div>
        </div>
        <div className="flex border border-themeColor rounded-full px-4 py-3 text-white">
          Max Supply = 50 billion
        </div>
      </div>
    </div>
  );
};

export default Features;
