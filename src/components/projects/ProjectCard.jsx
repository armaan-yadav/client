import React from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ project, index }) => {
  const { owner } = project;
  return (
    <motion.div className="h-[275px] md:w-[350px] w-full  flex flex-col relative z-40 group gap-1">
      <div className="w-full h-[80%]  overflow-x-hidden rounded-md">
        <iframe
          className="h-full w-full object-cover"
          srcDoc={project.result}
          scrolling="no"
        ></iframe>
      </div>
      <div className="flex items-center justify-start px-2 gap-2  h-[20%] rounded-b-md bg-transparent">
        {owner?.profileURL ? (
          <img
            src={owner?.profileURL}
            alt="owner-profile"
            className=" h-[40px] rounded-md"
          />
        ) : (
          <p className="bg-primaryText text-primary w-[50px] h-full rounded-md flex items-center justify-center py-1.5 text-3xl">
            {owner?.displayName?.[0]}
          </p>
        )}

        <div className="flex flex-col text-white  flex-1">
          <p className="font-bold text-lg">{project.title}</p>
          <p className="text-[13px] font-semibold text-primaryText">
            {owner?.displayName
              ? owner.displayName
              : owner?.email.split("@")[0]}
          </p>
        </div>
      </div>

      <div
        className="absolute h-full w-full right-[-5%] bottom-[-5%] bg-[#2f3038] -z-20
            group-hover:h-[110%] group-hover:w-[110%] rounded-md duration-200 ease-in-out"
      ></div>
    </motion.div>
  );
};

export default ProjectCard;
