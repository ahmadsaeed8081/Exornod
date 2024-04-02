import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/authReducer";
import { UserIcon, ArrowDownIcon, MenuIcon } from "../../assets/Icons";


import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useContractReads, useContractWrite } from "wagmi";


const Header = ({ openSidebar, setOpenSidebar }) => {

  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();


  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const userLogout = () => {
    dispatch(logout("admin-token"));
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setHide(false);
      setShow(false);
    });
  }, []);

  return (
    <div className="header-camp flex">
      <div className="wrapWidth wrap flex items-center">
        <div className="left flex items-center">
          <Link to="/" className="logo-img flex items-center justify-center">
            <img src="../images/logo.svg" className="logo" />
          </Link>
        </div>
        <div className="right flex items-center justify-end gap-14">
          <div className="menu-list flex gap-6">
            <div className="menu-item">Home</div>
            <div className="menu-item">Ecosystem</div>
            <div className="menu-item">Nod</div>
            <div className="menu-item relative">
              <div
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(!show);
                }}
              >
                Product
                <div className="flex items-center justify-center">
                  <ArrowDownIcon />
                </div>
              </div>
              {/* Menu show when Click */}
              <div
                className={`dropdown-list-menu flex col ${
                  show ? "show" : "hide"
                }`}
              >
                <Link
                  to={"/"}
                  className="tag flex items-center justify-between"
                >
                  Exorscan{" "}
                  <span className="ml-6 text-gray-400 text-[8px]">
                    coming soon
                  </span>
                </Link>
                <Link
                  to={"/"}
                  className="tag flex items-center justify-between"
                >
                  Exorswap
                  <span className="ml-6 text-gray-400 text-[8px]">
                    coming soon
                  </span>
                </Link>
                <Link
                  to={"/"}
                  className="tag flex items-center justify-between"
                >
                  Exorpad
                  <span className="ml-6 text-gray-400 text-[8px]">
                    coming soon
                  </span>
                </Link>
                <Link
                  to={"/"}
                  className="tag flex items-center justify-between"
                >
                  Exornodex
                  <span className="ml-6 text-gray-400 text-[8px]">
                    coming soon
                  </span>
                </Link>
              </div>
            </div>

            <div className="menu-item">Get EXOR</div>
          </div> 
          <div className="logout-action" onClick={() => open()}>
            <div className="btn button !flex items-center justify-center gap-1"  >
              <div className="flex items-center justify-center h-3 w-3">
                <UserIcon />
              </div>
              <h1>{isConnected
            ? address.slice(0, 5) + "..." + address.slice(38, 42)
            : "Connect Wallet"}</h1>
            </div>
          </div>
          <div
            className="flex sm:hidden items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setOpenSidebar(true);
            }}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
