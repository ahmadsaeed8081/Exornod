import React from "react";
import { useSelector } from "react-redux";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const Layout = ({ children }) => {
  const { openDashboardSidebar } = useSelector((state) => state.globalReducer);

  return (
    <div
      className={`dashboard-page-layout flex flex-col relative ${
        openDashboardSidebar ? "full-open" : ""
      }`}
    >
      <DashboardSidebar />
      <div className="pages-block flex flex-col relative h-full">
        <DashboardHeader />
        <section>{children}</section>
      </div>
    </div>
  );
};
export default Layout;
