import React,{useState,useEffect} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Layout from "../../../routes/Layout";
import { Tooltip } from "react-tippy";
import {
  ArrowRightIcon,
  VIcon,
  CopyIcon,
  LockIcon,
} from "../../../assets/Icons";
import "react-tippy/dist/tippy.css";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";


import {useNetwork,  useSwitchNetwork } from 'wagmi'
import { useAccount, useDisconnect } from 'wagmi'
import { cont_address,USDT_Address,DAI_Address,EXOR_Address,NOD_Address,token_abi,NFT_abi,cont_abi } from "../../../components/config";
import { useContractReads,useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

const DashboardHome = (props) => {

  const { address, isConnecting ,isDisconnected} = useAccount()

  const { chain } = useNetwork()
  const networkId=80001;


  const { data:data_withdrawReward, isLoading2_withdrawReward, isSuccess2_withdrawReward, write:withdrawReward } = useContractWrite({
  
    address: cont_address,
    abi: cont_abi,
    functionName: 'withdrawReward',                                                           
  
  })
  
  
  
   const waitForTransaction4 = useWaitForTransaction({
      hash: data_withdrawReward?.hash,
      onSuccess(data) {
      test?.()
        console.log('Success2',data )
      },
    })
  
    const { chains, error, isLoading, pendingChainId, switchNetwork:reward_switch } =
    useSwitchNetwork({
      chainId: networkId,
      onSuccess(){
  
        withdrawReward?.()
      }
  
    })



    const { data:data_activateRef, isLoading2_activateRef, isSuccess2_activateRef, write:activateRef1 } = useContractWrite({
  
      address: cont_address,
      abi: cont_abi,
      functionName: 'activate_Ref',                                                           
      value: props.FeePrice_MATIC,
    })
    
    
    
     const waitForTransaction5 = useWaitForTransaction({
        hash: data_activateRef?.hash,
        onSuccess(data) {
        props.test?.()
          console.log('Success2',data )
        },
      })
    
      const { chains1, error1, isLoading1, pendingChainId1, switchNetwork:activateRef_switch } =
      useSwitchNetwork({
        chainId: networkId,
        onSuccess(){
    
          activateRef1?.()
        }
    
      })

      function activate_Ref()
      {
        if(isDisconnected)
        {
          alert("kindly connect your wallet ");
          return;
        }
      
        if(Number(props.MATIC_Balance) < props.FeePrice_MATIC)
        {
          alert("You dont have enough balance"+ props.FeePrice_MATIC);
          return;
        }

        if(chain.id!=networkId)
        {
          activateRef_switch?.();
        }else{
          activateRef1?.()
    
        }      
      }

  
    function withdraw()
    {
      if(isDisconnected)
      {
        alert("kindly connect your wallet ");
        return;
      }
  
      // if(_amount<Number(minWithdraw)/10**18)
      // {
      //   alert("You can't withdraw less than "+Number(minWithdraw)/10**18 +" tokens");
      //   return;
      // }
      // if(_amount>Number(maxWithdraw)/10**18)
      // {
      //   alert("You can't withdraw more than "+Number(maxWithdraw)/10**18 +" tokens");
      //   return;
      // }
      
  
      if(Number(props.avail_balance)/10**18 == 0)
      {
        alert("You dont have balance to withdraw");
        return;
      }
      if(chain.id!=networkId)
      {
        reward_switch?.();
      }else{
        withdrawReward?.()
  
      }      
    }



  return (
    <Layout>
      <div className="bg-[#101010] min-h-screen flex">
        <div className="flex flex-col w-full px-8 py-20">
          <div className="py-10 w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex items-center justify-between gap-5 bg-[#1D1D1D] rounded-md p-6 border border-[#272727]">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-themeColor p-3">
                  <img
                    src="/images/h1.png"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="zen-dots text-white text-lg">Founder Nod</h1>
                <h2 className="zen-dots text-white text-lg">{props.nod_bal?Number(props.nod_bal):(0)}</h2>
              </div>
            </div>

            <div className="flex items-center justify-between gap-5 bg-[#1D1D1D] rounded-md p-6 border border-[#272727]">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full">
                  <img
                    src="/images/h6.png"
                    className="h-full w-full object-contain z-[1]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="zen-dots text-white text-lg">NOD Reward</h1>
                <h2 className="zen-dots text-white text-lg">{props.total_NodReward ? (Number(props.total_NodReward)/10**18).toFixed(2) : (0)}</h2>

              </div>
            </div>

            <div className="flex items-center justify-between gap-5 bg-[#1D1D1D] rounded-md p-6 border border-[#272727]">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full">
                  <img
                    src="/images/h5.png"
                    className="h-full w-full object-contain z-[1]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="zen-dots text-white text-lg">Direct Reward</h1>
                <h2 className="zen-dots text-white text-lg">{props.directRew?(Number(props.directRew)/10**18).toFixed(2):(0)} </h2>
                {/* <h4 className="zen-dots text-xs text-white font-extralight">
                  Polygon
                </h4> */}
              </div>
            </div>


            <div className="flex items-center justify-between gap-5 bg-[#1D1D1D] rounded-md p-6 border border-[#272727]">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-themeColor p-5">
                  <img
                    src="/images/h2.png"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="zen-dots text-white text-lg">Total Earned</h1>
                <h2 className="zen-dots text-white text-lg">{props.totalEarning?(Number(props.totalEarning)/10**18).toFixed(2):(0)}  </h2>
                {/* <button className="btn bg-black zen-dots text-[10px] text-white font-extralight w-max">
                  Claim All
                </button> */}
              </div>
            </div>

            <div className="flex items-center justify-between gap-5 bg-[#1D1D1D] rounded-md p-6 border border-[#272727]">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full">
                  <img
                    src="/images/h4.png"
                    className="h-full w-full object-contain z-[1]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="zen-dots text-white text-lg">Total Withdraw</h1>
                <h2 className="zen-dots text-white text-lg">{props.Total_withdraw?(Number(props.Total_withdraw)).toFixed(2):(0)}</h2>
              </div>
            </div>


            <div className="flex items-center justify-between gap-5 bg-[#1D1D1D] rounded-md p-6 border border-[#272727]">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-24 w-24 rounded-full">
                  <img
                    src="/images/h3.png"
                    className="h-full w-full object-contain z-[1]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="zen-dots text-white text-lg">Avail Balance</h1>
                <h2 className="zen-dots text-white text-lg">{props.avail_balance?(Number(props.avail_balance)/10**18).toFixed(2):(0)}</h2>
                <button className="btn bg-black zen-dots text-[10px] text-white font-extralight w-max" onClick={withdraw}>
                  Claim All
                </button>
              </div>
            </div>



          </div>


          {!props.is_eligible?(
          <div className="flex items-end gap-6">
          <div className="ref-block flex items-end flex-col gap-4">
            {/* <div className="hidden ref-info items-center relative bg-[#313131] border border-themeColor rounded-lg p-1 text-white font-extralight text-[8px] max-w-[280px]">
              if you didn’t bought a NOD NFT and you want to earn referral
              Earning so you have to pay fee to activate your referral link
              <div className="flex items-center justify-center absolute bg-black right-5 bottom-[-14px]">
                <VIcon />
              </div>
            </div> */}
            <Tooltip
              title="Activate your referral link with a fee (20$ worth of MATIC) to earn rewards without buying a NOD."
              position="top"
              arrow="true"
              animation="scale"
              className=""
            >
              <div className="ref flex items-center bg-[#313131] border border-themeColor rounded-lg p-2 gap-3">
                <h3 className="text-white text-sm font-light">
                Referral Link : 
                </h3>
                {/* <CopyToClipboard text={`${window.location.origin}/?ref=${address}`} >
                  <div className="flex items-center justify-center cursor-pointer">
                    <CopyIcon />
                  </div>
                </CopyToClipboard> */}
                <h3 className="text-white text-sm font-light">

                {window.location.origin}/?ref={address?address.slice(0,4)+"...."+address.slice(38,42):"kindly connect"}                  </h3>

                <div className="flex items-center justify-center">
                  <LockIcon />
                </div>
              </div>
            </Tooltip>
          </div>

          <button className="btn bg-themeColor text-black !px-6 zen-dots !font-extralight" onClick={activate_Ref}>
          Activate
        </button>



        </div>

          ):(

            <div className="flex items-end gap-6">
            <div className="ref-block flex items-end flex-col gap-4">
              {/* <div className="hidden ref-info items-center relative bg-[#313131] border border-themeColor rounded-lg p-1 text-white font-extralight text-[8px] max-w-[280px]">
                if you didn’t bought a NOD NFT and you want to earn referral
                Earning so you have to pay fee to activate your referral link
                <div className="flex items-center justify-center absolute bg-black right-5 bottom-[-14px]">
                  <VIcon />
                </div>
              </div> */}

                <div className="ref flex items-center bg-[#313131] border border-themeColor rounded-lg p-2 gap-3">
                  <h3 className="text-white text-sm font-light">
                  Referral Link : 
                  </h3>
                  <CopyToClipboard text={`${window.location.origin}/?ref=${address}`} >
                    <div className="flex items-center justify-center cursor-pointer">
                      <CopyIcon />
                    </div>
                  </CopyToClipboard>
                  <h3 className="text-white text-sm font-light">

                  {window.location.origin}/?ref={address?address.slice(0,4)+"...."+address.slice(38,42):"kindly connect"}                  </h3>

                </div>
            </div>


          </div>

          )}









          <div className="py-10 w-full grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="zen-dots text-white text-xl !font-extralight">
                Get a Founder Nod
              </h2>
              <div className="flex items-center justify-between gap-5 bg-[#000000] rounded-md p-6 border border-[#272727]">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/f-nod.png"
                    alt="img"
                    className="h-28 w-28 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-light">
                    While Supporting the Exornod network, get EXOR and
                    limited-edition NFT gifts.
                  </h1>
                  <Link
                    to="/dashboard/token"
                    className="button !flex items-center justify-center gap-2 w-max btn-radius sm:mt-6 mt-3"
                  >
                    <h1 className="text-[#101010] text-base font-normal">
                      Buy Now
                    </h1>
                    <div className="flex items-center justify-center h-4 w-4">
                      <ArrowRightIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="zen-dots text-white text-xl !font-extralight">
                Upgrade to premium
              </h2>
              <div className="flex items-center justify-between gap-5 bg-[#000000] rounded-md p-6 border border-[#272727]">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/p-nod.png"
                    alt="img"
                    className="h-28 w-28 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white font-light">
                    While supporting the Exornod network, get EXOR.
                  </h1>
                  <button className="button !flex items-center justify-center gap-2 w-max btn-radius sm:mt-6 mt-3">
                    <h1 className="text-[#101010] text-base font-normal">
                      Upgrade Now
                    </h1>
                    <div className="flex items-center justify-center h-4 w-4">
                      <ArrowRightIcon />
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
      {props.loader && <Loader />}

    </Layout>
    
  );
};

export default DashboardHome;
