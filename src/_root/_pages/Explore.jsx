import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Projects from "../../components/projects/Projects";
import HomeHeader from "../../components/headers/homeheader/HomeHeader";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { setProjects } from "../../redux/userSlice/projectSlice";
import ProjectsShimmer from "../../components/shimmer/ProjectsShimmer";
const Explore = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      const porjectQuery = query(
        collection(db, "Projects"),
        orderBy("id", "desc")
      );
      const unsubscribe = onSnapshot(porjectQuery, (querySnaps) => {
        const projectList = querySnaps.docs.map((doc) => doc.data());
        dispatch(setProjects(projectList));
      });

      return () => unsubscribe;
    }
  }, [user]);

  return user ? (
    <div className="w-full h-full md:py-8 py-2 flex flex-col gap-4 pl-[10px]">
      <HomeHeader user={user} />

      <div className="w-full text-2xl text-primaryText font-bold px-3 my-2">
        Explore All Projects
        <div className="h-[1px] w-full bg-emerald-500 mt-2"></div>
      </div>
      {!projects.length == 0 ? (
        <Projects projects={projects} />
      ) : (
        <ProjectsShimmer />
      )}
    </div>
  ) : (
    <div className="text-white h-full w-full  flex items-center justify-center">
      sign up karo guruji
    </div>
  );
};

export default Explore;
