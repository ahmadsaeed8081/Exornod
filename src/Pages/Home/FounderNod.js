import React from "react";

const FounderNod = () => {
  return (
    <div className="fonder-nod-section flex w-full min-h-[768px] py-20">
      <div className="wrap wrapWidth flex flex-col gap-12">
        <div className="flex items-center justify-center flex-col gap-8">
          <h1 className="zen-title-w">
            What is Founder <span className="zen-title-b">NOD</span>
          </h1>

          <p className="text-white text-sm font-extralight sm:w-2/3 w-full text-center leading-6">
            Founder NOD is your key to exclusive decentralized ownership. Unlock
            premium services, early access, and priority features, elevating
            your experience with unprecedented wealth growth possibilities.
            Engage in special DAO Votings, shaping project decisions, and enjoy
            decentralized ownership, placing you at the forefront of innovation
            and prosperity.
          </p>
        </div>
        <div className="numbers-grid w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4">
          <div className="numb-box w-full min-h-40">
            <h1 className="numb">01</h1>
            <h3 className="txt">Voting Rights</h3>
            <p className="text-white font-extralight text-xs mt-6">
              Each NOD carries the right to vote on proposed Exornod changes,
              ensuring your voice shapes the platform's evolution. Holding NOD
              grants enhanced voting power across Exornodies, amplifying your
              impact and securing a pivotal role in our decentralized community
              governance.
            </p>
          </div>
          <div className="numb-box w-full min-h-40">
            <h1 className="numb">02</h1>
            <h3 className="txt">Daily Rewards</h3>
            <p className="text-white font-extralight text-xs mt-6">
              Rewarding dedication, Exornod values its NOD holders with daily
              rewards for their contributions. Your commitment to the platform's
              growth and development is recognized, ensuring a continuous stream
              of incentives that reflect the significance of your work within
              the Exornod community. Join us and reap the benefits of your
              valuable contributions.
            </p>
          </div>
          <div className="numb-box w-full min-h-40">
            <h1 className="numb">03</h1>
            <h3 className="txt">NFT</h3>
            <p className="text-white font-extralight text-xs mt-6">
              NOD holders will recieve exclusive NFT, a digital emblem of
              Exornod ownership. This NFT not only signifies your stake but also
              dynamically transfers ownership upon exchange. Embrace the future
              of ownership representation and engage in a seamless transfer of
              Exornod's exclusive NFT, truly reflecting your connection with the
              platform.
            </p>
          </div>
          <div className="numb-box w-full min-h-40">
            <h1 className="numb">04</h1>
            <h3 className="txt">Early Access</h3>
            <p className="text-white font-extralight text-xs mt-6">
              Enjoy privileged access! Holders gain early entry to our suite of
              tools and programs, ensuring a firsthand experience with Exornod's
              cutting-edge innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNod;
