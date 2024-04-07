import React from 'react'
import { motion } from "framer-motion"
import { HiChevronDoubleLeft } from 'react-icons/hi'
const Anchor = ({ isSideMenu, setIsSideMenu, style }) => {
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            className={`absolute text-white -right-6 top-2 bg-emerald-400 cursor-pointer text-xl p-1 rounded-tr-lg rounded-br-lg ${style}`}
            onClick={() => setIsSideMenu(!isSideMenu)}
        >
            <HiChevronDoubleLeft
                className={`${isSideMenu && `rotate-180`} duration-300`}
            />
        </motion.div>
    )
}

export default Anchor