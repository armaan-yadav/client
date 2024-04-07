import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
const Projects = ({ projects }) => {
  return (
    <motion.div className=" w-full flex flex-wrap  items-center justify-center gap-12 py-3 ">
      {projects.length > 0 &&
        projects.map((project, index) => (
          <Link to={`/project/${project.id}`} className="" key={project.id}>
            <ProjectCard project={project} index={index} />
          </Link>
        ))}
    </motion.div>
  );
};

export default Projects;
