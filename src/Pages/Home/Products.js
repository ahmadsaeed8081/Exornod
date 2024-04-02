import React from "react";

const Products = () => {
  return (
    <div id="products" className="products-section flex w-full h-full">
      <div className="wrap wrapWidth flex flex-col">
        <div className="flex flex-col gap-14 items-center justify-center">
          <h1 className="zen-title-w">Products</h1>
          <div className="products-grid w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="product-box flex items-center justify-center flex-col p-5 gap-3">
              <h1 className="title mt-2">Exorscan</h1>
              <p className="text-white text-xs font-extralight text-center leading-5">
                Exorscan research engine for early crypto projects. Scan, rate,
                and establish trust scores, ensuring transparency and
                safeguarding against scams in the cryptocurrency space
              </p>
            </div>
            <div className="product-box flex items-center justify-center flex-col p-5 gap-3">
              <h1 className="title mt-2">Exorswap</h1>
              <p className="text-white text-xs font-extralight text-center leading-5">
                Exorswap offers secure multi-chain token swapping, shielding
                against phishing scams, and minimizing gas fees. Enjoy added
                peace of mind with a refund feature for excess gas fees.
              </p>
            </div>
            <div className="product-box flex items-center justify-center flex-col p-5 gap-3">
              <h1 className="title mt-2">Exorpad</h1>
              <p className="text-white text-xs font-extralight text-center leading-5">
                Exorpad offers automated funding for early projects, leveraging
                smart contracts for transparency, security, continuity, and
                cost-effectiveness, all underpinned by blockchain technology.
              </p>
            </div>
            <div className="product-box flex items-center justify-center flex-col p-5 gap-3">
              <h1 className="title mt-2">Exornodex</h1>
              <p className="text-white text-xs font-extralight text-center leading-5">
                Exornodex provides a secure exchange for hassle-free trading.
                With market management and manipulation safeguards, it
                introduces AI for seamless and secure trading experiences
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full relative py-10 justify-center">
          <div className="w-full absolute border-t border-dashed border-white"></div>
          <h1 className="zen-title-w text-center bg-black z-10 px-3">
            More <span className="zen-title-b">Coming</span> Soon
          </h1>
        </div>
        <div className="flex flex-col w-full items-center justify-center relative">
          <h1 className="zen-title-w absolute top-0">Tokenomics</h1>
          <img src="./images/bg-product.svg" className="" />
        </div>
      </div>
    </div>
  );
};

export default Products;
