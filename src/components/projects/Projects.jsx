import React from "react";
import { AddNewProject } from "../addNewProject/AddNewProject";
import Project from "../project/Project";

const Projects = () => {
  return (
    <div className="Projects">
      <AddNewProject />
      <Project />
    </div>
  );
};

export default Projects;
