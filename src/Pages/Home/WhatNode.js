import React from "react";
import { ArrowRightIcon, UserIcon } from "../../assets/Icons";

const WhatNode = (props) => {
  return (


    <div id="aboutus" className="what-node-section flex w-full h-full py-20">
      <div className="wrap wrapWidth flex flex-col gap-12">
        <div className="numbers-grid w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8">
          <div className="numb-box w-full h-40">
            <h1 className="numb">{(Number(props.total_NodReward)/10**18).toFixed(1)}</h1>
            <h3 className="txt">NOD Rewards</h3>
          </div>
          <div className="numb-box w-full h-40">
            <h1 className="numb">{(Number(props.total_BurnReward)/10**18).toFixed(1)}</h1>
            <h3 className="txt">POB Rewards</h3>
          </div>
          <div className="numb-box w-full h-40">
            <h1 className="numb">{Number(props.Toraldirects)}</h1>
            <h3 className="txt">Total Directs</h3>
          </div>
          <div className="numb-box w-full h-40">
            <h1 className="numb">{(Number(props.totalEarning)/10**18).toFixed(1)}</h1>
            <h3 className="txt">Total Earning</h3>
          </div>
        </div>
        <div className="detail-box flex items-center">
          <div className="left flex flex-1 flex-col gap-6 mt-20">
            <h1 className="zen-title-w">
              What Is <span className="zen-title-b">Exornod?</span>
            </h1>
            <p className="text-white text-sm font-extralight">
              Exornod pioneers decentralized blockchain tools, providing
              innovational products—Bridge, Swap, and Dex Exchange—fueled by AI.
              Our mission extends to an AI Research Engine, ensuring quality
              projects through secure trust scoring. Embracing community
              innovation,
              <br />
              <br />
              we empower the future of technology with DAO-voted approvals,
              solidifying Exornod as a trailblazer in decentralized solutions.
            </p>
            <div className="flex items-center gap-8 my-4">
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="zen-title-b">10000</h1>
                <p className="text-white font-extralight text-sm">Total Nods</p>
              </div>
              <div className="flex h-14 border border-l border-white"></div>
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="zen-title-b">25%</h1>
                <p className="text-white font-extralight text-sm">
                  NOD Rewards
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-5">
              <button className="btn btn-radius button !flex items-center justify-center gap-1">
                <div className="flex items-center justify-center h-3 w-3">
                  <UserIcon />
                </div>
                <h1 className="text-[#101011] text-xs">Connect Wallet</h1>
              </button>
              <button className="btn-read-more btn-radius button !flex items-center justify-center gap-1 !bg-transparent !border-none">
                <div className="icon-arrow flex items-center justify-center h-3 w-3">
                  <ArrowRightIcon />
                </div>
                <h1 className="text-white text-xs">Read More</h1>
              </button>
            </div> */}
          </div>
          <div className="right flex flex-1 items-center justify-center">
            <div className="img-block flex items-center justify-center flex-1 relative">
              <img
                src="./images/ilus-bner.svg"
                alt="img"
                className="h-[400px] w-[400px] absolute"
              />
              <div className="box-shadow-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatNode;
