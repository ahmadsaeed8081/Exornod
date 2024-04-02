import React, { useState } from "react";

import { ArrowDownIcon } from "../../assets/Icons";
import Web3 from "web3";

const DropDown = ({ dropDownList, selectedValue, setSelectedValue }) => {
  const [hide, setHide] = useState(false);
  

  function Convert_To_eth( val){
    if(val==null || val==undefined || val=="")
    return 

    const web3= new Web3(new Web3.providers.HttpProvider("https://bsc.publicnode.com	"));
    val= web3.utils.fromWei(val.toString(),"ether");
    return val;
  
  }

  return (
    <div className="dropDown flex items-center justify-center flex-col relative">
      <div className="category flex items-center">
        <div
          className="cbox cleanbtn flex items-center relative pointer"
          onClick={(e) => {
            e.stopPropagation();
            setHide(!hide);
          }}
        >
          <div className="slt flex items-center">
            <div className="unit-name flex items-center font s14 b4">
              <span
                className="unit-eng flex items-center font s14 b4"
                placeholder="Plano"
              >
                {selectedValue ?Convert_To_eth (selectedValue[0]) : ""}
              </span>
            </div>
          </div>

          <div className="arrow-icon flex items-center justify-center">
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      <div className={`block flex aic abs ${hide ? "show" : ""}`}>
        <div className="manue flex aic col anim">
          {dropDownList.map((item, index) => (
            <div
              key={index}
              className="slt flex items-center gap-1 justify-between"
              onClick={(e) => {
                setHide(!hide);
                setSelectedValue(item);
              }}
            >
              <div className="unit-name flex aic font s14 b4">
                <span className="unit-eng flex aic font s14 b4">
                  {Convert_To_eth( item[0])}
                </span>
              </div>
              <div className="unit-name flex items-center font-normal text-xs">
                <span className="unit-eng flex aic font s14 b4">
                  {Number(item[1])}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
