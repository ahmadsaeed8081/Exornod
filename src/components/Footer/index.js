import React, { useEffect, useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "../../assets/Icons";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="footer-comp flex flex-col ">
        <div className="wrapWidth wrap flex sm:flex-row flex-col gap-24">
          <div className="left flex flex-col flex-[0.5] gap-8">
            <img src="./images/logo.svg" className="" />
            <p className="text-sm text-white font-extralight leading-6">
              Exornod pioneers decentralized blockchain tools, providing
              innovational products—Bridge, Swap, and Dex Exchange—fueled by AI.
              Our mission extends to an AI Research Engine, ensuring quality
              projects through secure trust scoring. Embracing community
              innovation,
            </p>
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="flex items-center justify-center cursor-pointer h-6 w-6"
              >
                <InstagramIcon />
              </a>
              <a
                href="/"
                className="flex items-center justify-center cursor-pointer h-6 w-6"
              >
                <FacebookIcon />
              </a>
              <a
                href="/"
                className="flex items-center justify-center cursor-pointer h-6 w-6"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="right flex flex-1 sm:items-start  items-center sm:flex-row flex-col gap-4 pt-10">
            <div className="flex flex-col flex-1 gap-6 sm:items-start  items-center">
              <h1 className="text-themeColor font-medium text-xl">COMPANY</h1>
              <div className="flex flex-col gap-4 sm:items-start  items-center">
                <a href="#home" className="text-white font-light text-sm">
                  Home
                </a>
                <a href="#aboutus" className="text-white font-light text-sm">
                  About Us
                </a>

                <a
                  href="#key-benefits"
                  className="text-white font-light text-sm"
                >
                  key Benefits
                </a>
                <a
                  href="#exornod-work"
                  className="text-white font-light text-sm"
                >
                  Exornod Work
                </a>
                <a href="#products" className="text-white font-light text-sm">
                  Products
                </a>
              </div>
            </div>
            {/* <div className="flex flex-col flex-1 gap-6 sm:items-start  items-center">
              <h1 className="text-themeColor font-medium text-xl">RESOURCES</h1>
              <div className="flex flex-col gap-4 sm:items-start  items-center">
                <a href="" className="text-white font-light text-sm">
                  API reference
                </a>
                <a href="" className="text-white font-light text-sm">
                  Status
                </a>
                <a href="" className="text-white font-light text-sm">
                  Get help
                </a>
                <a href="" className="text-white font-light text-sm">
                  Brand assets
                </a>
                <a href="" className="text-white font-light text-sm">
                  Fintech Services
                </a>
              </div>
            </div> */}
            <div className="flex flex-col flex-1 gap-6 sm:items-start  items-center">
              <h1 className="text-themeColor font-medium text-xl">CONTACT</h1>
              <div className="flex flex-col gap-4 sm:items-start  items-center">
                {/* <div className="flex items-center gap-2 text-white font-light text-sm">
                  <div className="flex items-center justify-center h-4 w-4">
                    <PhoneIcon />
                  </div>
                  +021-854-021
                </div> */}
                <div className="flex items-center gap-2 text-white font-light text-sm">
                  <div className="flex items-center justify-center h-4 w-4">
                    <MailIcon />
                  </div>
                  contact@exornod.io
                </div>
                {/* <div className="flex items-center gap-2 text-white font-light text-sm">
                  <div className="flex items-center justify-center h-4 w-4">
                    <LocationIcon />
                  </div>
                  Random Address 123
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-themeColor flex items-center justify-center px-5 py-3">
        <h1 className="text-[#101010] text-base text-center">
          Copyright @2024 Exornod.io All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
