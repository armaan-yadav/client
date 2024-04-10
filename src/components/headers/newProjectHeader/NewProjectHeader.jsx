import React, { useState } from "react";
import logo from "/assets/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdCheck, MdEdit } from "react-icons/md";
import UserProfile from "../../xothers/UserProfile";
import favicon from "/assets/favicon.svg";
const NewProjectHeader = ({
  title,
  setTitle,
  user,
  handleSave,
  owner,
  updateProject,
  sameOwner,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <header className="text-white  min-h-[66px] h-[66px]  w-full bg-secondary flex justify-between items-center px-5 ">
      <div className="flex items-center  gap-10">
        <Link to={"/"}>
          <img src={logo} alt="" className="max-sm:hidden" />
          <img src={favicon} alt="" className="md:hidden h-[30px]" />
        </Link>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <AnimatePresence>
              {isEditing ? (
                <>
                  <motion.input
                    key={"editTitle"}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-transparent  bg-red-200  outline-none w-fit"
                    autoFocus={isEditing}
                  />
                </>
              ) : (
                <>
                  <motion.p
                    key={"showTitle"}
                    onClick={() => setIsEditing(true)}
                  >
                    {title}
                  </motion.p>
                </>
              )}
              {isEditing ? (
                <motion.div
                  key={"MdCheck"}
                  className="cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsEditing(false)}
                >
                  <MdCheck className="text-emerald-400" />
                </motion.div>
              ) : (
                <motion.div
                  key={"MdEdit"}
                  className="cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsEditing(true)}
                >
                  <MdEdit className="text-primaryText" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm text-primaryText">
                {owner?.displayName?.stringValue
                  ? owner?.displayName.stringValue
                    ? owner?.displayName.stringValue
                    : user?.email.stringValue.split("@")[0]
                  : user?.displayName
                  ? user?.displayName
                  : user?.email.split("@")[0]}
              </p>
              {!sameOwner && (
                <motion.p
                  whileTap={{ scale: 0.9 }}
                  className="text-[10px] bg-emerald-400 px-2.5 py-0.5 text-primary font-bold hover:text-white duration-200 cursor-pointer rounded-sm"
                >
                  + Follow
                </motion.p>
              )}
            </div>
          }
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {(sameOwner || window.location.href.includes("newProject")) && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-emerald-400 text-primary font-[600] px-2 py-1 rounded-md hover:bg-emerald-500 duration-200 hover:text-white cursor-pointer"
            onClick={() => {
              window.location.href.includes("newProject")
                ? handleSave()
                : updateProject();
            }}
          >
            SAVE
          </motion.div>
        )}
        <div className="hidden md:block">{<UserProfile />}</div>
      </div>
    </header>
  );
};

export default NewProjectHeader;
