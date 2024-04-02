/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.scss";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Main from "./Pages/Home";
import Routing from "./routes/Routing";




import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai} from 'wagmi/chains'

// import { useLocation } from 'react-router-dom';


function App() {

  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const regAddres = params.get("address");


  const chains = [polygonMumbai]
  const projectId = 'f385bf4e147a499aee6b6c2f17ded944'
  
  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

  // const { chains, publicClient } = configureChains(
  //   [polygonMumbai],
  //   [alchemyProvider({ apiKey: 'Xr86iyHzmF6-yzBAqV5rd_PW7ds7QKlh' })],
  // )

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)



  return( 
    <>
      <WagmiConfig config={wagmiConfig}>
    
        <Routing />
    
      </WagmiConfig>
z
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
