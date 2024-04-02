import React, { useState,useEffect } from "react";

import Modal from "../../components/Modal";
import Wrapper from "../../routes/Wrapper";
import HeroSection from "./HeroSection";
import WhatNode from "./WhatNode";
import FounderNod from "./FounderNod";
import KeyBenefits from "./KeyBenefits";
import Products from "./Products";
import Features from "./Features";

import { useLocation } from 'react-router-dom';

import Loader from "../../components/Loader";



const Main = (props) => {
  const [open, setOpen] = useState(false);
  const [ref, set_ref] = useState("");


  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const temp_address = params.get("ref");

  useEffect(()=>{
    if(temp_address!=null)
    {
      set_ref(temp_address);
  
    }
    else{
      set_ref("0x0000000000000000000000000000000000000000");
  
    }
  },[])

  useEffect(()=>{

    props.setRef(ref)

  },[ref])
  
  return (
    <Wrapper>
      <div className="lading-page bg-[#101010] min-h-screen flex flex-col">
        <HeroSection />
        <WhatNode total_NodReward={props.total_NodReward} total_BurnReward={props.total_BurnReward} Toraldirects={props.Toraldirects} totalEarning={props.totalEarning} />
        <FounderNod />
        <KeyBenefits />
        <Products />
        <Features />
        {/* <Modal open={open} onClose={() => setOpen(false)}>
          <TableRowModel setOpen={setOpen} item={modelData} />
        </Modal> */}

      </div>
      {props.loader && <Loader />}

    </Wrapper>
  );
};

export default Main;
