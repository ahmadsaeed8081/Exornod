import React from "react";
import { ArrowRightIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import { useAccount, useDisconnect } from 'wagmi'

const HeroSection = () => {

  const { address, isConnecting ,isDisconnected} = useAccount()

  return (
    <div className="hero-section flex w-full relative min-h-[768px]">
      <div className="box-shadow" />
      <div className="wrap wrapWidth flex flex-col items-center justify-center">
        <div className="sec-block flex items-center w-full flex-col sm:flex-row sm:h-full h-[640px]">
          <div className="left flex flex-col sm:flex-[0.5] sm:gap-4 gap-2">
            <h1 className="hero-slug">
              Explore <span>Exornod</span> Advancing Crypto Innovation
            </h1>
            <p className="text-white text-sm font-light">
              Secured Dapps Ecosystem & Community Crypto Innovation or
              Community-Based Technologies Ecosystem
            </p>
            <Link
              to="./dashboard/home"
              className="button !flex items-center justify-center gap-2 w-max btn-radius sm:mt-6 mt-3"
            >
              <h1 className="text-[#101010] text-base font-normal">
                {address==null?("Get Started"):("Go To Dashboard")}
              </h1>
              <div className="flex items-center justify-center h-4 w-4">
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
          <div className="right flex items-center justify-center flex-1 relative">
            <img src="./images/bg-hero.svg" className="h-60 w-full z-20" />
            <img
              src="./images/frame1.svg"
              className="h-[440px] min-w-[200px] w-auto absolute z-10"
            />
            <div className="box-shadow-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
