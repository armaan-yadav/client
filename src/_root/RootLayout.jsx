import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Sidebar isSideMenu={isSideMenu} setIsSideMenu={setIsSideMenu} />
      <div className=" flex-1 min-h-screen max-h-screen w-full h-full  gap-4 overflow-y-scroll  flex items-start justify-start   flex-col">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
