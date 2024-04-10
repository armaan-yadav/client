import React from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft } from "react-icons/hi";
const Anchor = ({ isSideMenu, setIsSideMenu, style }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className={`absolute text-white right-0 md:-right-6 top-2 bg-emerald-400 cursor-pointer text-xl p-1 md:rounded-tr-lg md:rounded-br-lg ${
        isSideMenu
          ? `rounded-bl-lg rounded-tl-lg `
          : `rounded-br-lg rounded-tr-lg `
      } ${style}`}
      onClick={() => setIsSideMenu(!isSideMenu)}
    >
      <HiChevronDoubleLeft
        className={`${!isSideMenu && `rotate-180`} duration-300`}
      />
    </motion.div>
  );
};

export default Anchor;
