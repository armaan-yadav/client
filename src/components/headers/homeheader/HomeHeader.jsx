import React from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UserProfile from "../../xothers/UserProfile";
const HomeHeader = ({ user }) => {
  return (
    <div className="w-full flex h-[46px] gap-2 px-4 md:px-12">
      <Searchbar />
      {/* profile section */}
      <div className="h-full   rounded-md flex items-center justify-center relative">
        {user == null ? (
          <Link to={"/auth"} className="h-full">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="text-white bg-emerald-500 hover:bg-emerald-700 duration-200 px-3 h-full flex items-center rounded-md"
            >
              SignUp
            </motion.div>
          </Link>
        ) : (
          <UserProfile user={user} />
        )}
      </div>
    </div>
  );
};

export default HomeHeader;
