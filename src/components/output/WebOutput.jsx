import React from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleDown } from "react-icons/hi";
const WebOutput = ({ setHideOutput, hideOutput, result }) => {
  return (
    <div
      className={` m ${
        hideOutput ? `max-h-[0px]` : `max-h-full`
      } h-full w-full relative  duration-200 `}
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className={`absolute text-white right-0 ${
          hideOutput ? `bottom-[100%]` : `top-0`
        } bg-emerald-400 cursor-pointer p-2 rounded-lg text-xl
                max-w-fit duration-200 `}
        onClick={() => setHideOutput(!hideOutput)}
      >
        <HiChevronDoubleDown
          className={`duration-300 ${
            hideOutput && "rotate-180"
          } duration-150 text-primary`}
        />
      </motion.div>

      <div className={`min-h-full max-h-full w-full flex`}>
        <motion.div
          className={` min-h-full w-full bg-white  text-black duration-150 flex-1 `}
        >
          <iframe srcDoc={result} className="h-full w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default WebOutput;
