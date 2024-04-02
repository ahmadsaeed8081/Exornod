import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowDownIcon } from "../../assets/Icons";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      // setOpenSidebar(false);
    });
  }, []);

  return (
    <div
      className={`sidebar-s fixed rel anim ${openSidebar ? "show" : "hide"}`}
    >
      <div
        className={`side-block flex col anim ${openSidebar ? "show" : "hide"}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="hdr flex items-center justify-between">
          <Link to="/" className="logo-img flex items-center justify-center">
            <img src="../images/logo.svg" className="logo" />
          </Link>
          <div
            className="flex items-center text-white font-semibold text-lg"
            onClick={(e) => {
              setOpenSidebar(false);
            }}
          >
            X
          </div>
        </div>
        <div className="menu-list flex flex-col gap-6">
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
              <Link to={"/"} className="tag flex items-center justify-between">
                Exorscan{" "}
                <span className="ml-6 text-gray-400 text-[8px]">
                  coming soon
                </span>
              </Link>
              <Link to={"/"} className="tag flex items-center justify-between">
                Exorswap
                <span className="ml-6 text-gray-400 text-[8px]">
                  coming soon
                </span>
              </Link>
              <Link to={"/"} className="tag flex items-center justify-between">
                Exorpad
                <span className="ml-6 text-gray-400 text-[8px]">
                  coming soon
                </span>
              </Link>
              <Link to={"/"} className="tag flex items-center justify-between">
                Exornodex
                <span className="ml-6 text-gray-400 text-[8px]">
                  coming soon
                </span>
              </Link>
            </div>
          </div>
          <div className="menu-item">Get Exor</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
