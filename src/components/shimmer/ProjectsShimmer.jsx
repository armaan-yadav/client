import React from "react";

const ProjectsShimmer = () => {
  return (
    <div className="w-full flex flex-wrap  items-center justify-center gap-12 py-3">
      {Array(4)
        .fill("")
        .map((card, index) => (
          <div
            className="h-[275px] md:w-[350px] w-full  flex flex-col relative z-40 group gap-1 "
            key={index}
          >
            <div className="w-full h-[80%]  overflow-x-hidden rounded-md shimmer"></div>
            <div className="flex items-center justify-start px-2 gap-2  h-[20%] rounded-b-md">
              <div className="h-[55px] rounded-md w-[50px] shimmer"></div>

              <div className="flex flex-col text-white  flex-1 gap-2">
                <p className="font-bold text-lg h-[15px] w-[100px] shimmer"></p>
                <p className="text-[13px] font-semibold h-[15px] w-[150px] shimmer"></p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectsShimmer;
