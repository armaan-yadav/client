import React from 'react'
import { FaSearchengin } from 'react-icons/fa'

const Searchbar = () => {
    return (
        <div className="flex items-center w-full gap-1 px-2 text-white border-[1px] border-gray-300 rounded-lg bg-secondary">
            <FaSearchengin className="text-2xl text-white" />
            <input
                type="text"
                placeholder="Search here..."
                className="text-xl flex-1 outline-none px-2  py-1.5 placeholder:text-gray-600 bg-transparent  "
            />
        </div>
    )
}

export default Searchbar