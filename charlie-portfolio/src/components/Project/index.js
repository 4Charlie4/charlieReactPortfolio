import React from "react";
import sleepSpace from "../../assets/sleepSpaceS.jpg";
import rateFood from "../../assets/rateTheFoodS.png";
import basicTextPwa from "../../assets/basicTextPwaS.png";

function Projects() {

  return (
    <section className="myProject container-fluid">
      <h2 className="homeAbout">Here are some of my projects</h2>
      <div className="projects row d-flex ">
        <div className="col-sm-4">
          <a href="https://github.com/4Charlie4/project-sleepSpace" data-content="SleepSpace" className="projLink">
            <img
              src={sleepSpace}
              alt="SleepSpace Project"
              className="projImg"
            />
          </a>
        </div>
        <div className="col-sm-4">
          <a href="https://github.com/4Charlie4/rateYourFood" data-content="Rate The Food" className="projLink">
            <img
              src={rateFood}
              alt="Rate The Food Project"
              className="projImg"
            />
          </a>
        </div>
        <div className="col-sm-4">
          <a href="https://github.com/4Charlie4/basicTextEditor" data-content="Basic Text Editor (PWA)" className="projLink">
            <img
              src={basicTextPwa}
              alt="Basic Text Editor Project"
              className="projImg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
