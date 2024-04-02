import React from "react";
import { ArrowRightIcon } from "../../assets/Icons";

const KeyBenefits = () => {
  return (
    <>
      <div
        id="key-benefits"
        className="key-benefits flex w-full h-full  py-16 relative"
      >
        <div className="box-shadow" />
        <div className="wrap wrapWidth flex flex-col">
          <div className="flex items-center justify-center flex-col gap-8">
            <h1 className="zen-title-w">
              Core <span className="zen-title-b">Benefits</span>
            </h1>
            <p className="text-white text-sm font-extralight sm:w-2/3 w-full text-center leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="key-grid py-24 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="key-box flex items-center justify-center flex-col relative py-8 px-3 gap-3">
              <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40]">
                <img src="./images/key1.svg" className="h-full w-full" />
              </div>
              <h1 className="title mt-2">Self Custody</h1>
              <p className="text-white text-xs font-extralight text-center">
                Enjoy full self-custody of your purchased node, ensuring
                complete ownership and anonymity in transactions, prioritizing
                security and privacy.
              </p>
            </div>
            <div className="key-box flex items-center justify-center flex-col relative py-8 px-3 gap-3">
              <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40]">
                <img src="./images/key2.svg" className="h-full w-full" />
              </div>
              <h1 className="title mt-2">Security</h1>
              <p className="text-white text-xs font-extralight text-center">
                Exornod utilizes Polygon MATIC blockchain, a secure and reliable
                decentralized ledger technology ensuring no single point of
                failure, providing robust security and reliability.
              </p>
            </div>
            <div className="key-box flex items-center justify-center flex-col relative py-8 px-3 gap-3">
              <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40]">
                <img src="./images/key3.svg" className="h-full w-full" />
              </div>
              <h1 className="title mt-2">Rewards</h1>
              <p className="text-white text-xs font-extralight text-center">
                Every DAO voter and presenter will receive bonuses as rewards
                for their active participation and valuable contributions to the
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="exornod-work"
        className="exornod-work flex w-full relative h-full"
      >
        <div className="box-shadow" />
        <div className="wrap wrapWidth flex sm:flex-row flex-col items-center gap-10">
          <div className="flex items-center justify-center flex-col gap-8 flex-[0.4]">
            <h1 className="zen-title-w">How Does Exornod Work</h1>
            <p className="text-white text-sm font-extralight">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="flex items-center flex-1">
            <div className="key-grid py-24 w-full grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6  gap-y-10">
              <div className="key-box flex flex-col relative py-8 px-3 gap-3">
                <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40] border border-themeColor">
                  <img src="./images/w1.svg" className="h-full w-full" />
                </div>
                <h1 className="title mt-4">Our Solution </h1>
                <p className="text-white text-xs font-extralight pr-5">
                  Exornod brings transparency to the blockchain, offering a
                  suite of secure tools. Revolutionize your experience with our
                  solution, ensuring trust and clarity in the world of
                  blockchain.
                </p>
                <div className="flex items-center justify-end">
                  <div className="arrow-icon flex items-center justify-center h-4 w-6 cursor-pointer">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
              <div className="key-box flex flex-col relative py-8 px-3 gap-3">
                <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40] border border-themeColor">
                  <img src="./images/w2.svg" className="h-full w-full" />
                </div>
                <h1 className="title mt-4">Scale with security </h1>
                <p className="text-white text-xs font-extralight pr-5">
                  offers essential protection for decentralized projects,
                  ensuring a secure foundation for their growth and success in
                  the ever-evolving landscape.
                </p>
                <div className="flex items-center justify-end">
                  <div className="arrow-icon flex items-center justify-center h-4 w-6 cursor-pointer">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
              <div className="key-box flex flex-col relative py-8 px-3 gap-3">
                <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40] border border-themeColor">
                  <img src="./images/w3.svg" className="h-full w-full" />
                </div>
                <h1 className="title mt-4">Community innovation</h1>
                <p className="text-white text-xs font-extralight pr-5">
                  Develop cutting-edge tools and technologies for projects,
                  unlocking benefits and fostering a dynamic ecosystem within
                  our collaborative community.
                </p>
                <div className="flex items-center justify-end">
                  <div className="arrow-icon flex items-center justify-center h-4 w-6 cursor-pointer">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
              <div className="key-box flex flex-col relative py-8 px-3 gap-3">
                <div className="flex items-center justify-center bg-[#101010] h-16 w-16 rounded-full p-1 absolute top-[-26px] left-[%40] border border-themeColor">
                  <img src="./images/w4.svg" className="h-full w-full" />
                </div>
                <h1 className="title mt-4">Ownership and Inclusivity</h1>
                <p className="text-white text-xs font-extralight pr-5">
                  Striving for a decentralized and permissionless network,
                  ensuring full ownership for all participants, fostering
                  autonomy, and promoting inclusivity within the ecosystem.
                </p>
                <div className="flex items-center justify-end">
                  <div className="arrow-icon flex items-center justify-center h-4 w-6 cursor-pointer">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyBenefits;
