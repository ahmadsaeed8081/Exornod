import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Private";
import Public from "./Public";

import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

import Home from "../Pages/Home";
import FitnessApp from "../Pages/FitnessApp";
import Marketplace from "../Pages/Marketplace";

import Signup from "../Pages/Dashboard/Signup";
import DashboardHome from "../Pages/Dashboard/Home";
import History from "../Pages/Dashboard/History";
import PurchaseToken from "../Pages/Dashboard/PurchaseToken";
import ProofBurn from "../Pages/Dashboard/ProofBurn";
import ReferralEarning from "../Pages/Dashboard/ReferralEarning";

import Web3 from "web3";



import {useNetwork,  useSwitchNetwork } from 'wagmi'
import { useAccount, useDisconnect } from 'wagmi'
import { cont_address,USDT_Address,DAI_Address,EXOR_Address,NOD_Address,token_abi,NFT_abi,cont_abi } from "../components/config";


const Routing = () => {
  const [loader, setLoader] = useState(false);

  const { chain } = useNetwork()
  const { address, isConnecting ,isDisconnected} = useAccount()


  const [USDT_Balance, set_USDTBalance] = useState(0);
  const [DAI_Balance, set_DAIBalance] = useState(0);
  const [EXOR_Balance, set_EXORBalance] = useState(0);
  const [MATIC_Balance, set_MaticBalance] = useState(0);


  const [totalNodsold, set_totalNodsold] = useState(0);
  const [totalNods, set_totalNods] = useState(0);
  const [nod_bal, set_nod_bal] = useState(0);


  const [total_NodReward, set_total_NodReward] = useState(0);
  const [total_BurnReward, set_total_BurnReward] = useState(0);
  const [Total_withdraw, set_Total_withdraw] = useState(0);
  const [totalBurn, set_totalBurn] = useState(0);
  const [totalBurnAmount, set_totalBurnAmount] = useState(0);

  const [totalEarning, set_totalEarning] = useState(0);
  const [referralLevel_count, set_referralLevel_count] = useState([]);
  const [referralLevel_earning, set_referralLevel_earning] = useState([]);
  const [user, set_user] = useState([]);
  const [allBurns, set_allBurns] = useState([]);
  const [history, setHistory] = useState([]);
  const [Toraldirects, set_Totaldirects] = useState(0);
  const [directRew, set_directRew] = useState(0);

  const [minburn, set_minburn] = useState(0);
  const [maxburn, set_maxburn] = useState(0);
  const [exorPrice, set_exorPrice] = useState(0);
  const [PerNodePrice, set_PerNodePrice] = useState(0);
  const [PerNodePrice_MATIC, set_PerNodePrice_MATIC] = useState(0);
  const [FeePrice_MATIC, set_FeePrice_MATIC] = useState(0);

  const [avail_balance, set_avail_balance] = useState(0);
  const [is_eligible, set_is_eligible] = useState(false);
  const [count, set_count] = useState(0)
  const [referral, set_referral] = useState("0x0000000000000000000000000000000000000000")






  useEffect(()=>{

    if((count==0 && address!=undefined))
    {
      set_count(1);
        test();
    }
    else{
      set_count(0);

    }
  
  },[address,totalNodsold,is_eligible,allBurns,Total_withdraw])




  function setRef(_add)
  {
    // alert(_add)
    set_referral(_add);
  }




  async function test()
  {
    setLoader(true)

    const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-mumbai-bor-rpc.publicnode.com	"));
    
    let balance =await  web3.eth.getBalance(address)
    const contract=new web3.eth.Contract(cont_abi,cont_address);
    const NFTcontract=new web3.eth.Contract(NFT_abi,NOD_Address);

    let USDT_token=new web3.eth.Contract(token_abi,USDT_Address);
    let DAI_token=new web3.eth.Contract(token_abi,DAI_Address);
    let EXOR_token=new web3.eth.Contract(token_abi,EXOR_Address);

    //Tokens Data

    let USDT_Balance = await USDT_token.methods.balanceOf(address).call();    
    let DAI_Balance = await DAI_token.methods.balanceOf(address).call();    
    let EXOR_Balance = await EXOR_token.methods.balanceOf(address).call();    

    //NFT Data

    let maxSupply = await NFTcontract.methods.maxSupply().call();    
    let totalSupply = await NFTcontract.methods.totalSupply().call();    
    let nod_bal = await NFTcontract.methods.balanceOf(address).call();    
    //RewContract Data

    // let min_burnAmount = await contract.methods.min_burnAmount().call();    
    // let max_burnAmount = await contract.methods.max_burnAmount().call();    
    let min_burnAmount =25000;    
    let max_burnAmount =   10000000;
    let exorUsdPrice = await contract.methods.exorUsdPrice().call();
    let PerNodePrice = await contract.methods.get_nodePrice().call();
    let feePriceInDollar = await contract.methods.feePriceInDollar().call();

    let PerNodePrice_matic = await contract.methods.getConversionRate(PerNodePrice).call();
    let FeePrice_matic = await contract.methods.getConversionRate(feePriceInDollar).call();

    let user_NodRew = await contract.methods.get_userRew(address).call();    

    let user = await contract.methods.user(address).call();    
    // console.log(user)

    let TotalBurnReward = await contract.methods.getTotalBurnReward(address).call();    
    let RefLevel_earning = await contract.methods.RefLevel_earning(address).call();    
    let RefLevel_count = await contract.methods.Level_count(address).call();    
    // let PerNodRew = await contract.methods.get_nodeRew("1").call();    

    let CurrBalance = await contract.methods.get_availableBalance().call({from: address});
    let totalEarning= await contract.methods.get_totalEarning().call({ from: address });   
    let AllBurns = await contract.methods.getAll_burns().call({ from: address });  
    

    // let history = await contract.methods.get_history(address).call({ from: address });



    set_USDTBalance(USDT_Balance)
    set_DAIBalance(DAI_Balance)
    set_EXORBalance(EXOR_Balance)
    set_MaticBalance(balance)
    set_nod_bal(nod_bal)

    set_totalNodsold(totalSupply)
    set_totalNods(maxSupply)
    set_exorPrice(exorUsdPrice)
    set_PerNodePrice(PerNodePrice)
    set_total_NodReward(user_NodRew)
    set_total_BurnReward(TotalBurnReward)
    set_Total_withdraw(user[5])
    set_totalBurn(user[4])
    set_is_eligible(user[3])
    set_totalEarning(totalEarning)
    set_referralLevel_count(RefLevel_count)
    set_referralLevel_earning(RefLevel_earning)
    set_user(user)
    set_allBurns(AllBurns)
    set_Totaldirects(user[2])
    set_directRew(user[1])
    set_avail_balance(CurrBalance)
    set_minburn(min_burnAmount)
    set_maxburn(max_burnAmount)
    set_PerNodePrice_MATIC(PerNodePrice_matic)
    set_FeePrice_MATIC(FeePrice_matic)
    set_totalBurnAmount(user[7])

    setLoader(false)


  console.log("object done");
  }  







  return (



    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Home setRef={setRef} loader={loader} total_NodReward={total_NodReward} total_BurnReward={total_BurnReward} Toraldirects={Toraldirects} totalEarning={totalEarning} />
            </Public>
          }
        />
        <Route
          path="/signup"
          element={
            <Public>
              <Registration />
            </Public>
          }
        />
        <Route path="dashboard">
          <Route
            path="signup"
            element={
              <Public>
                <Signup />
              </Public>
            }
          />
          
          <Route
            path="home"
            element={
              <Public>
                <DashboardHome  loader={loader} directRew={directRew} FeePrice_MATIC={FeePrice_MATIC} MATIC_Balance={MATIC_Balance} total_NodReward={total_NodReward} total_BurnReward={total_BurnReward} is_eligible={is_eligible} nod_bal={nod_bal} totalEarning={totalEarning} Toraldirects={Toraldirects} avail_balance={avail_balance} Total_withdraw={Total_withdraw}  EXOR_Balance={EXOR_Balance}/>
              </Public>
            }
          />
          <Route
            path="history"
            element={
              <Public>
                <History />
              </Public>
            }
          />
          
          <Route
            path="token"
            element={
              <Public>
                <PurchaseToken referral={referral} loader={loader} test={test} PerNodePrice_MATIC={PerNodePrice_MATIC} USDT_Balance={USDT_Balance} DAI_Balance={DAI_Balance} EXOR_Balance={EXOR_Balance} MATIC_Balance={MATIC_Balance} PerNodePrice={PerNodePrice} nod_bal={nod_bal} totalNods={totalNods} totalNodsold={totalNodsold}/>
              </Public>
            }
          />
          <Route
            path="proof-burn"
            element={
              <Public>
                <ProofBurn loader={loader} total_BurnReward={total_BurnReward} totalBurnAmount={totalBurnAmount} totalBurn={totalBurn} allBurns={allBurns} EXOR_Balance={EXOR_Balance} test={test} minburn={minburn} maxburn={maxburn}/>
              </Public>
            }
          />
        <Route
            path="referral-earning"
            element={
              <Public>
                <ReferralEarning  loader={loader} referralLevel_earning={referralLevel_earning} referralLevel_count={referralLevel_count} />
              </Public>
            }
          />  
        </Route>

      </Routes>
    </BrowserRouter>


  );
};

export default Routing;
