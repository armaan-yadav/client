import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserOut } from "../../utils/helper";
import { removeUser } from "../../redux/userSlice/userSlice";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeInOut } from "../../animatons/index";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
const UserProfile = ({}) => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const getFirstLetter = () => {
    if (user?.displayName) return user.displayName[0];
  };
  return (
    <>
      <div className="flex h-full items-center justify-center gap-2 relative ">
        {user ? (
          user.photoURL ? (
            <img
              src={user.photoURL}
              className="w-[50px] h-full rounded-md object-cover"
            />
          ) : (
            <motion.p
              whileHover={{ scale: 1.2 }}
              className="bg-primaryText text-primary w-[50px] h-full rounded-md flex items-center justify-center py-1.5 text-3xl"
            >
              {getFirstLetter()}
            </motion.p>
          )
        ) : (
          <Link to={"/auth"} className="h-full">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="text-white bg-emerald-500 hover:bg-emerald-700 duration-200 px-3 h-full flex items-center rounded-md py-1.5"
            >
              SignUp
            </motion.div>
          </Link>
        )}
        <FaCaretDown
          className={`h-full w-[30px] px-1 max-sm:hidden   cursor-pointer  text-white ${
            showLogoutMenu && `rotate-180`
          } duration-200  rounded-lg`}
          onClick={() => {
            setShowLogoutMenu(!showLogoutMenu);
          }}
        />

        {showLogoutMenu && (
          <motion.div
            {...fadeInOut}
            className="absolute top-[100%] right-0 text-primaryText w-[150%] flex flex-col bg-secondary  gap-1.5 rounded-lg overflow-hidden py-1 z-[100]"
          >
            <button className="px-1 border-b-[1px]  hover:bg-emerald-500 hover:text-white  duration-200">
              <Link to={"/"}> Projects</Link>
            </button>

            <button className="px-1 border-b-[1px]  hover:bg-emerald-500 hover:text-white  duration-200">
              <Link to={"/profile"}>Profile</Link>
            </button>
            <button
              className="px-1 border-b-[1px]  hover:bg-emerald-500 hover:text-white  duration-200 "
              onClick={() => {
                signUserOut();
                dispatch(removeUser());
              }}
            >
              Sign Out
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
