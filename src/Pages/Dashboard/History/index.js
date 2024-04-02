import React from "react";
import Layout from "../../../routes/Layout";

const History = () => {
  return (
    <Layout>
      <div className="bg-[#101010] min-h-screen items-center justify-center flex">
        <div className="flex flex-col w-full px-8 py-20">
          <h1 className="zen-dots text-white font-normal text-lg mb-4">
            Investment History
          </h1>
          <div className="tbl-block flex items-center flex-col w-full bg-black overflow-hidden overflow-x-auto">
            <div className="row-item flex w-[800px] md:w-full bg-themeColor ">
              <div className="flex flex-1 p-3 border border-r border-[#292929]">
                ID
              </div>
              <div className="flex flex-1 p-3 border border-r border-[#292929]">
                Amount
              </div>
              <div className="flex flex-1 p-3 border border-r border-[#292929]">
                Name
              </div>
              <div className="flex flex-1 p-3 border border-r border-[#292929]">
                Time
              </div>
              <div className="flex flex-1 p-3 border border-r border-[#292929]">
                Status
              </div>
              <div className="flex flex-1 p-3 border border-r border-[#292929]">
                Active
              </div>
            </div>
            <div className="row-item flex w-[800px] md:w-full bg-black">
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                01
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                $59.00
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                Matic
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                12.60 am
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                04
              </div>
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                Approved
              </div>
            </div>
            <div className="row-item flex w-[800px] md:w-full bg-black">
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                02
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                $59.00
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                Matic
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                12.60 am
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                04
              </div>
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                Approved
              </div>
            </div>
            <div className="row-item flex w-[800px] md:w-full bg-black">
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                03
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                $59.00
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                Matic
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                12.60 am
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                04
              </div>
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                Approved
              </div>
            </div>
            <div className="row-item flex w-[800px] md:w-full bg-black">
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                04
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                $59.00
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                Matic
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                12.60 am
              </div>
              <div className="flex flex-1 p-3 text-white  border border-r border-[#292929]">
                04
              </div>
              <div className="flex flex-1 p-3 text-white border border-r border-[#292929]">
                Approved
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
