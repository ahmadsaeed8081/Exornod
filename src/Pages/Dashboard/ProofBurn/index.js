import React, { useEffect, useState } from "react";
import Layout from "../../../routes/Layout";
import DropDown from "../../../components/DropDown";
import Timer from "../../../components/Timer";

import {useNetwork,  useSwitchNetwork } from 'wagmi'
import { useAccount, useDisconnect } from 'wagmi'
import { cont_address,USDT_Address,DAI_Address,EXOR_Address,NOD_Address,token_abi,NFT_abi,cont_abi } from "../../../components/config";
import { useContractReads,useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import Web3 from "web3";
import Loader from "../../../components/Loader";

const ProofBurn = (props) => {
  const [activeTab, setActiveTab] = useState("burn");
  const [selectedTab, setSelectedTab] = useState("Stacking");
  const [selectedPeriodValue, setSelectedPeriodValue] = useState(null);
  const periodList = [
    { lbl: "100 Days", slug: "" },
    { lbl: "200 Days", slug: "" },
    { lbl: "300 Days", slug: "" },
    { lbl: "400 Days", slug: "" },
    { lbl: "500 Days", slug: "" },
  ];
  const networkId=80001;
  let count=0;



  const { chain } = useNetwork()
  const { address, isConnecting ,isDisconnected} = useAccount()

  const [burnAmount, setburndAmount] = useState(0);
  const [apy, set_apy] = useState("");
  const [exp_return, set_exp_return] = useState("");

  const [allburns, set_burnsList] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(null);

  useEffect(()=>{
    if(count==0  || count==0 && props.allBurns.length>0)
    {

      setSelectedPeriodValue(props.allBurns[0])
        count++;
    }
  
  },[address,props.allBurns])

  const {switchNetwork:burn_switch } =
    useSwitchNetwork({
      chainId: networkId,
      // throwForSwitchChainNotSupported: true,
      onSuccess(){

        EXOR_approval?.()
      }

    })

    const { data:nodToken_Result, isLoading:isLoading_nodToken, isSuccess:nodToken_Success, write:burn_token } = useContractWrite({

      address: cont_address,
      abi: cont_abi,
      functionName: 'burn_token',
      args: [ Convert_To_wei(burnAmount)],
      onSuccess(data) 
      {
        props.test();
      },
    
    })


    const { config:EXOR_Config  } = usePrepareContractWrite({
    
      address: EXOR_Address,
      abi: token_abi,
      functionName: 'approve',
      args: [cont_address,Convert_To_wei(burnAmount)],
  
    })

    const {data:data_EXOR, isLoading:isLoading_EXOR, isSuccess:isSuccess_EXOR,write: EXOR_approval} = useContractWrite(EXOR_Config)


    const waitForTransaction2 = useWaitForTransaction({
      hash: data_EXOR?.hash,
      onSuccess(data) {
        burn_token?.()
        console.log('Success',data )
      },
    })



    function Convert_To_wei( val){
      if(val==null || val==undefined || val=="")
      return 
  
      const web3= new Web3(new Web3.providers.HttpProvider("https://bsc.publicnode.com	"));
      val= web3.utils.toWei(val.toString(),"ether");
      return val;
    
    }
     function check_APY(_amount)
    {
        if(_amount>=25000  && _amount<=50000 )
        {
            set_apy( "110%") ;
        }  
        else if(_amount>50000  && _amount<=250000 )
        {
            set_apy( "130%") ;
        } 
        else if(_amount>250000  && _amount<=750000 )
        {
            set_apy( "150%") ;
        } 
        else if(_amount>750000  && _amount<=2000000 )
        {
            set_apy( "200%") ;
        }
        else if(_amount>2000000)
        {
            set_apy( "230%") ;
        }
        else{
            set_apy("0");
        }

    }
    function find_expectedReturn(_amount)
    {
      let apy=0;
      if(_amount>=25000  && _amount<=50000 )
      {
         apy= 110 ;
      }  
      else if(_amount>50000  && _amount<=250000 )
      {
         apy= 130 ;
      } 
      else if(_amount>250000  && _amount<=750000 )
      {
         apy= 150 ;
      } 
      else if(_amount>750000  && _amount<=2000000 )
      {
         apy= 200 ;
      }
      else if(_amount>2000000)
      {
         apy= 230 ;
      }

      set_exp_return( _amount*apy/100)
      
    }


  async function burn()
  {

    if(isDisconnected)
    {
      alert("kindly connect your wallet");
      return;
    }
    if(!props.is_eligible)
    {
      alert("To Earn Burn Reward, You have to buy NOD NFT or activate your Referral link ");
      return;
    }
    if(burnAmount==0 )
    {
      alert("kindly write amount to burn ");
      return;
    }
    if(Number(burnAmount)<Number(props.minburn) )
    {
      alert("Minimum burn amount is "+ Number(props.minburn));
      return;
    }


    if(Number(props.EXOR_Balance)/10**18 < Number(burnAmount))
    {
      alert("You don't have sufficient balance");
      return;
    }
    if(chain.id!=networkId)
    {
      burn_switch?.();
    }else{
      EXOR_approval?.()

    }

  }




  return (
    <Layout>
      <div className="bg-[#101010] min-h-screen flex">
        <div className="flex flex-col w-full px-8 py-28">
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8">
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-[#272727] rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p1.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots text-white font-normal md:text-sm text-[10px]">
                  Active POB
                </h1>
                <h2 className="zen-dots text-white font-normal text-xs">{Number(props.totalBurn)}</h2>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-[#272727] rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p2.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots text-white font-normal md:text-sm text-[10px]">
                  Total Burn
                </h1>
                <h2 className="zen-dots text-white font-normal text-xs">
                {(Number(props.totalBurnAmount)/10**18).toFixed(2)} EXOR
                </h2>
              </div>
              
            </div>
            
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-[#272727] rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p3.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots text-white font-normal md:text-sm text-[10px]">
                  Total Reward
                </h1>
                <h2 className="zen-dots text-white font-normal text-xs">
                  {(Number(props.total_BurnReward)/10**18).toFixed(2)} EXOR
                </h2>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1 bg-[#1D1D1D] border border-[#272727] rounded md:p-4 p-2 h-32">
              <div className="flex items-center justify-center md:h-24 md:w-24 h-14 w-14 rounded-full bg-themeColor md:p-4 p-2">
                <img src="/images/p4.png" className=" h-full w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="zen-dots text-white font-normal md:text-sm text-[10px]">
                  Reward
                </h1>
                <h2 className="zen-dots text-white font-normal text-xs">
                  0.00
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20">
            <div className="flex flex-col border border-themeColor rounded-xl w-96 overflow-hidden">
              {/* Selection Tabs */}
              <div className="flex items-center w-full top-0 left-0 right-0 h-16">
                <button
                  className={`flex items-center h-full flex-1 justify-center btn  text-black zen-dots !rounded-none ${
                    activeTab === "burn" ? "bg-themeColor" : "bg-white"
                  }`}
                  onClick={() => setActiveTab("burn")}
                >
                  Burn
                </button>
                <button
                  className={`flex items-center h-full flex-1 justify-center btn  text-black zen-dots !rounded-none ${
                    activeTab === "reward" ? "bg-themeColor" : "bg-white"
                  }`}
                  onClick={() => setActiveTab("reward")}
                >
                  Reward
                </button>
              </div>
              {/* BUR Block */}
              {activeTab === "burn" ? (
                <div className="flex flex-col w-full">
                  <div className="flex flex-col items-center justify-end border-b border-themeColor mt-10">
                    <div className="flex items-center justify-between w-full p-4">
                      <h1 className="zen-dots text-white text-sm">
                        Plan Duration
                      </h1>
                      <h1 className="zen-dots text-white text-sm">1 Year</h1>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-10 p-4 mt-6">
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white font-light text-sm">
                          Minimum : {Number(props.minburn)} 
                        </h1>
                        <h1 className="text-white font-light text-sm">
                          Balance: {(Number(props.EXOR_Balance)/10**18).toFixed(2)} EXOR
                        </h1>
                      </div>
                      <div className="flex items-center p-2 rounded-lg border border-themeColor">
                        <input
                          type="number"
                          className="w-full cleanbtn text-white zen-dots"
                          min={0}
                          value={burnAmount}
                          placeholder="write amount"
                          max={Number(props.EXOR_Balance)>0?(Number(props.EXOR_Balance)/10**18).toFixed(2):0}
                          onChange={(e)=>{setburndAmount(e.target.value); check_APY(e.target.value);find_expectedReturn(e.target.value)}}
                        />
                        <div className="flex items-center justify-center text-white font-light text-xs gap-1">
                          Exor{" "}
                          <div className="bg-themeColor text-black text-xs p-1 rounded-md font-light" onClick={(e)=>setburndAmount((Number(props.EXOR_Balance)/10**18).toFixed(2))}>
                            Max
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full gap-4 mt-5">
                        <div className="flex items-center justify-between w-full">
                          <h1 className="zen-dots text-white text-xs font-extralight">
                            APY
                          </h1>
                          <h1 className="zen-dots text-white text-xs font-extralight">
                          {apy}
                          </h1>
                        </div>
                        <div className="flex items-center justify-between w-full">
                          <h1 className="zen-dots text-white text-xs font-extralight">
                            Expected Return
                          </h1>
                          <h1 className="zen-dots text-white text-xs font-extralight">
                            {exp_return}
                          </h1>
                        </div>
                        <button className="btn bg-themeColor mt-12 zen-dots text-black font-medium text-lg buttonPrimary" onClick={burn}>
                          Burn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Reward Block */
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-10 p-4 mt-6">
                    <div className="flex flex-col w-full gap-2 my-6">
                      <div className="flex items-center justify-between">
                        <h1 className="text-white font-light text-sm">
                          Previous Burns
                        </h1>
                      </div>
                      <DropDown
                        dropDownList={props.allBurns}
                        selectedValue={props.allBurns[0]}
                        setSelectedValue={setSelectedPeriodValue}
                      />
                      <Timer time={selectedPeriodValue ? Number(selectedPeriodValue[2]) : 0} />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                      <div className="flex items-center justify-between w-full">
                        <h1 className="zen-dots text-white text-xs font-extralight">
                          Earned Reward
                        </h1>
                        <h1 className="zen-dots text-white text-xs font-extralight">
                        {selectedPeriodValue ? (Number(selectedPeriodValue[4])/10**18).toFixed(2) : 0} 
                        </h1>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <h1 className="zen-dots text-white text-xs font-extralight">
                          Pending Reward
                        </h1>
                        <h1 className="zen-dots text-white text-xs font-extralight">
                        {selectedPeriodValue ? (Number(selectedPeriodValue[5])/10**18).toFixed(2) : 0} 
                        </h1>
                      </div>
                      <button className="btn bg-BLACK mt-12 zen-dots text-black font-medium text-lg buttonPrimary" >
                        {/* Reward */}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
        {props.loader && <Loader />}

      </div>
    </Layout>
  );
};

export default ProofBurn;
