import React from "react";

import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return (
    <div className="project-list section">
      {Array(5)
        .fill(0)
        .map(i => (
          <ProjectSummary />
        ))}
    </div>
  );
};

export default ProjectList;
