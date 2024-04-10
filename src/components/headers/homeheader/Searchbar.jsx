import React from "react";
import { FaSearchengin } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex items-center w-full   text-white border-[1px] border-gray-300 rounded-lg  bg-secondary flex-row">
      <FaSearchengin className="text-2xl text-white" />
      <input
        type="text"
        placeholder="Search here..."
        className="text-xl  outline-none px-2  py-1.5 placeholder:text-gray-600 bg-transparent  "
      />
    </div>
  );
};

export default Searchbar;
