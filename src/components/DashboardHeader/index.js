import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenDashboardSidebar } from "../../store/reducers/globalReducer";
import { logout } from "../../store/reducers/authReducer";
import { BellIcon, MenuIcon } from "../../assets/Icons";

const Header = () => {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const { openDashboardSidebar } = useSelector((state) => state.globalReducer);

  useEffect(() => {
    document.addEventListener("click", () => {
      setHide(false);
      setShow(false);
      dispatch(setOpenDashboardSidebar(true));
    });
  }, []);

  return (
    <div className="dashboard-header flex">
      <div className="wrapWidth wrap flex items-center">
        <div className="left flex items-center">
          <Link
            to="/"
            className="logo-img flex items-center justify-center md:hidden"
          >
            <img src="../images/logo.svg" className="logo" />
          </Link>
        </div>
        <div className="right flex items-center justify-end gap-6">
          <div className="flex items-center justify-center relative cursor-pointer">
            <div className="flex items-center justify-center h-6 w-6">
              <BellIcon />
            </div>
            <div className="flex items-center justify-center rounded-full h-2 w-2 bg-[#C13038] absolute top-0 right-0"></div>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="flex items-center justify-center h-8 w-8">
              <img
                src="/images/user-profile.png"
                alt="img"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-full h-2 w-2 bg-[#05BE01] absolute bottom-0 right-0"></div>
          </div>
          <div
            className="flex md:hidden items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              localStorage.setItem("sidebar", true);
              dispatch(setOpenDashboardSidebar(!openDashboardSidebar));
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
