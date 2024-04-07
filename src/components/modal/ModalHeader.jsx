import React from "react";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RxCross1, RxCross2 } from "react-icons/rx";

const ModalHeader = ({ setShowModal, activeData, setActiveData }) => {
  return (
    <div className="h-[40px] w-full flex justify-between text-lg py-1 px-2 items-center">
      <div className="flex gap-3">
        <div
          className={`flex items-center gap-1  px-2 py-1 rounded-sm  w-[80px] cursor-pointer ${
            activeData == "html" ? "bg-secondary" : "bg-primary"
          } duration-150`}
          onClick={() => setActiveData("html")}
        >
          <FaHtml5 className="text-red-400" />
          <p className="text-[13px]">HTML</p>
        </div>
        <div
          className={`flex items-center gap-1  px-2 py-1 rounded-sm  w-[80px] cursor-pointer ${
            activeData == "css" ? "bg-secondary" : "bg-primary"
          } duration-150`}
          onClick={() => setActiveData("css")}
        >
          <FaCss3Alt className="text-blue-400" />
          <p className="text-[13px]">CSS</p>
        </div>
        <div
          className={`flex items-center gap-1  px-2 py-1 rounded-sm  w-[80px] cursor-pointer ${
            activeData == "js" ? "bg-secondary" : "bg-primary"
          } duration-150`}
          onClick={() => setActiveData("js")}
        >
          <DiJavascript className="text-yellow-400 " />
          <p className="text-[13px]">JS</p>
        </div>
      </div>
      <RxCross1
        className="text-2xl cursor-pointer"
        onClick={() => setShowModal(false)}
      />
    </div>
  );
};

export default ModalHeader;
