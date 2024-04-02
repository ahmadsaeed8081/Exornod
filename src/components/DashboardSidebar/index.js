import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenDashboardSidebar } from "../../store/reducers/globalReducer";
import {
  ArrowDownIcon,
  MenuIcon,
  DashboardIcon,
  ProfileIcon,
  ProfileIcon2,
  CheckListIcon,
  ShopIcon,
  BurnIcon,
  StakeIcon,
  GameIcon,
  HealthIcon,
  PoolsIcon,
  VaultsIcon,
  LaunchpadIcon,
} from "../../assets/Icons";

const DashboardSidebar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { openDashboardSidebar } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  const menuList = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      status: "",
      link: "/dashboard/home",
    },
    {
      title: "Proof of Burn",
      icon: <BurnIcon />,
      status: "",
      link: "/dashboard/proof-burn",
    },

    {
      title: "Referral",
      icon: <CheckListIcon />,
      status: "",
      link: "/dashboard/referral-earning",
    },
    { 
      title: "Nod",
      icon: <ProfileIcon />,
      status: "Coming Soon",
      link: "#" 
      
    },
    {
      title: "My Nod",
      icon: <ProfileIcon2 />,
      status: "Coming Soon",
      link: "#",
    },
    { title: "Shop",
     icon: <ShopIcon />,
     status: "Coming Soon",
     link: "#" 
    },

    {
      title: "Proof Of Stake",
      icon: <StakeIcon />,
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Games",
      icon: <GameIcon />,
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Health Apps",
      icon: <HealthIcon />,
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Pools",
      icon: <PoolsIcon />,
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Vaults",
      icon: <VaultsIcon />,
      status: "Coming Soon",
      link: "#",
    },
    {
      title: "Launchpad",
      icon: <LaunchpadIcon />,
      status: "Coming Soon",
      link: "#",
    },
  ];

  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.body.style.overflowY = "auto";
      setOpenDashboardSidebar(false);
    });
  }, []);

  return (
    <div
      className={`dashboard-sidebar fixed rel anim ${
        openDashboardSidebar ? "full-open" : ""
      }`}
    >
      <div
        className={`side-block  flex col anim ${
          openDashboardSidebar ? "full-open" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={`hdr flex items-center ${
            openDashboardSidebar ? "" : "center"
          }`}
        >
          {/* {openDashboardSidebar ? (
            <div
              className="icon-close flex items-center justify-center text-white"
              onClick={(e) => {
                localStorage.setItem("sidebar", false);
                dispatch(setOpenDashboardSidebar(false));
              }}
            >
              X
            </div>
          ) : (
            <div
              className="icon-close flex aic jc h-full w-full"
              onClick={(e) => {
                localStorage.setItem("sidebar", true);
                dispatch(setOpenDashboardSidebar(true));
              }}
            >
              <MenuIcon />
            </div>
          )} */}
          {openDashboardSidebar && (
            <div className="hdr-tag">
              <img src="/images/logo.svg" alt="logo" className="" />
            </div>
          )}
        </div>
        <div className="menu-list flex flex-col gap-6">
          {menuList.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className="menu-item flex items-center gap-2"
            >
              <div className="icon flex items-center justify-center h-6 w-6">
                {item.icon}
              </div>
              <h1 className="text-white zen-dots text-sm">{item.title}</h1>
              {item.status !== "" && (
                <h3 className="text-black text-[8px] bg-themeColor rounded-full px-1 py-0 leading-4">
                  {item.status}
                </h3>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
