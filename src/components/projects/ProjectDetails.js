import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Consequat nostrud ad reprehenderit magna ad. Ipsum occaecat sint
            exercitation nulla velit officia fugiat exercitation. Sint laborum
            exercitation non in velit veniam sunt magna dolore sint eiusmod
            officia culpa. Quis tempor consectetur ullamco Lorem occaecat
            exercitation id. Do reprehenderit ex anim proident enim pariatur
            sunt excepteur sit. Dolore eu laborum adipisicing adipisicing
            proident reprehenderit quis nostrud non aliqua occaecat sint minim
            ea. Consectetur ex cupidatat commodo sit consequat cupidatat.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Veronica Vatsa</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
