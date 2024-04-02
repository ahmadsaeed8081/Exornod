import React from "react";
import Layout from "../../../routes/Layout";

import Loader from "../../../components/Loader";


const ReferralEarning = (props) => {
  return (
    <Layout>
      <div className="bg-[#101010] min-h-screen flex">
        <div className="flex flex-col w-full px-8 py-28">
          <h1 className="text-white font-semibold text-3xl zen-dots text-center my-10">
            Referral Earning
          </h1>
          <div className="flex items-center flex-wrap justify-center gap-6">


            <div className="flex flex-col gap-4 rounded-lg p-6 border border-themeColor w-[280px] min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-themeColor font-normal text-xs p-1 rounded-lg">
                  5%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl text-white text-center">
                Level 01
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                  <p className="text-white font-medium">{props.referralLevel_earning?(Number(props.referralLevel_earning[0])/10**18):(0)}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">Team</h1>
                  <p className="text-white font-medium">{props.referralLevel_count?(Number(props.referralLevel_count[0])):(0)}</p>
                </div>
              </div>
            </div>



            <div className="flex flex-col gap-4 rounded-lg p-6 border border-themeColor w-[280px] min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-themeColor font-normal text-xs p-1 rounded-lg">
                  4%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl text-white text-center">
                Level 02
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                  <p className="text-white font-medium">{props.referralLevel_earning?(Number(props.referralLevel_earning[1])/10**18):(0)}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">Team</h1>
                  <p className="text-white font-medium">{props.referralLevel_count?(Number(props.referralLevel_count[1])):(0)}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-6 border border-themeColor w-[280px] min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-themeColor font-normal text-xs p-1 rounded-lg">
                  3%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl text-white text-center">
                Level 03
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                  <p className="text-white font-medium">{props.referralLevel_earning?(Number(props.referralLevel_earning[2])/10**18):(0)}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">Team</h1>
                  <p className="text-white font-medium">{props.referralLevel_count?(Number(props.referralLevel_count[2])):(0)}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-6 border border-themeColor w-[280px] min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-themeColor font-normal text-xs p-1 rounded-lg">
                  2%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl text-white text-center">
                Level 04
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                  <p className="text-white font-medium">{props.referralLevel_earning?(Number(props.referralLevel_earning[3])/10**18):(0)}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">Team</h1>
                  <p className="text-white font-medium">{props.referralLevel_count?(Number(props.referralLevel_count[3])):(0)}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-6 border border-themeColor w-[280px] min-h-[200px]">
              <div className="flex items-center justify-end w-full">
                <h3 className="bg-themeColor font-normal text-xs p-1 rounded-lg">
                  1%
                </h3>
              </div>
              <h2 className="zen-dots font-medium text-2xl text-white text-center">
                Level 05
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white">Total Earning</h1>
                  <p className="text-white font-medium">{props.referralLevel_earning?(Number(props.referralLevel_earning[4])/10**18):(0)}</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">Team</h1>
                  <p className="text-white font-medium">{props.referralLevel_count?(Number(props.referralLevel_count[4])):(0)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.loader && <Loader />}

      </div>
    </Layout>
  );
};

export default ReferralEarning;
