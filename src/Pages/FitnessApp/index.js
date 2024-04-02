import React from "react";
import Wrapper from "../../routes/Wrapper";
import { ArrowRightIcon } from "../../assets/Icons";

const FitnessApp = () => {
  return (
    <Wrapper>
      <div className="fitness-app-page bg-[#101010] min-h-screen flex flex-col">
        <div className="hero-section flex w-full relative min-h-[768px]">
          <div className="box-shadow" />
          <div className="wrap wrapWidth flex flex-col items-center justify-center">
            <div className="sec-block flex items-center w-full flex-col sm:flex-row sm:h-full h-[640px]">
              <div className="left flex flex-col sm:flex-[0.5] sm:gap-8 gap-4">
                <h1 className="hero-slug">
                  <span>Fitness </span>
                  App Coming Soon
                </h1>
                <p className="text-white text-sm font-light">
                  Enhance the power of Economy Through BlockChain
                </p>
                <button className="button !flex items-center justify-center gap-2 w-max btn-radius mt-6">
                  <h1 className="text-[#101010] text-base font-normal">
                    Get Started
                  </h1>
                  <div className="flex items-center justify-center h-4 w-4">
                    <ArrowRightIcon />
                  </div>
                </button>
              </div>
              <div className="right flex items-center justify-center flex-1 relative">
                <img src="./images/bg-hero.svg" className="h-60 w-full z-40" />
                <img
                  src="./images/fitness-bg.svg"
                  className="h-[350px] w-[350px] absolute z-10"
                />
                <div className="box-shadow-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FitnessApp;
