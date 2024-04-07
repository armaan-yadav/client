import React, { useEffect } from "react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import { useSelector } from "react-redux";
import Anchor from "../xothers/Anchor";
import { IoCreateOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { TbSourceCode, TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
const Sidebar = ({ isSideMenu, setIsSideMenu }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <div
      className={`w-2 min-h-screen max-h-screen bg-secondary relative ${
        isSideMenu ? `w-2` : `flex-[.3] xl:flex-[.2] text-white`
      } duration-300 px-3 py-6 relative justify-between flex flex-col z-[200] `}
    >
      {/* anchor for show/hide */}
      <Anchor isSideMenu={isSideMenu} setIsSideMenu={setIsSideMenu} />
      {/* side-bar items */}
      <div className="overflow-hidden w-full flex flex-col gap-4">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-72 h-auto object-contain" />
        </Link>

        <p className="text-gray-400 hover:text-gray-200 w-full text-center text-lg">
          Hello, {user?.displayName ? user.displayName : "Friend! "}
        </p>

        <Link
          to={"/newProject"}
          className="w-full text-center py-2 border-gray-200 hover:border-2 rounded-md duration-200
                    group flex items-center justify-center "
        >
          <p className="text-gray-400 group-hover:text-gray-200 cursor-pointer flex gap-2 items-center">
            Create New Project <IoCreateOutline />
          </p>
        </Link>

        <Link
          to={"/"}
          className="flex items-center gap-2 w-full justify-center text-gray-400 hover:text-white duration-200"
        >
          <MdHome className="text-xl" /> Home
        </Link>
        <Link
          to={"/explore"}
          className="flex items-center gap-2 w-full justify-center text-gray-400 hover:text-white duration-200"
        >
          <MdExplore className="text-xl" /> Explore
        </Link>
        <Link
          to={"/profile"}
          className="flex items-center gap-2 w-full justify-center text-gray-400 hover:text-white duration-200"
        >
          <GiPlagueDoctorProfile className="text-xl" /> Profile
        </Link>
      </div>
      <div className="w-full flex items-center justify-center flex-col py-1 gap-2 overflow-hidden">
        <Link
          to={"https://github.com/armaan-yadav/codepencil"}
          target="_blank"
          className="text-sm w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white duration-200"
        >
          Source Code
          <TbSourceCode className="text-xl" />{" "}
          <FaGithubAlt className="text-xl" />
        </Link>
        <div className="h-[1px] bg-white w-full"></div>
        <div className="flex flex-col gap-2.5 w-full">
          <p className="text-sm text-gray-400 w-full text-center">
            Developed By - <span className="text-white">Armaan Y</span>
          </p>
          <div className="w-full flex items-center gap-3.5 justify-center text-xl text-gray-400">
            <Link target="_blank" to={"https://armaan-yadav.netlify.app/"}>
              <TbWorldWww className="hover:text-white cursor-pointer" />
            </Link>
            <Link target="_blank" to={"https://github.com/armaan-yadav"}>
              <FaGithub className="hover:text-white cursor-pointer" />
            </Link>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/armaan-yadav-a58805213/"}
            >
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
