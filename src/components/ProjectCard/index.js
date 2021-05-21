import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="col-md-4">
      <div className="card my-1 project-card" style={{ backgroundImage: `url( ${process.env.PUBLIC_URL}/${props.image} )`, height: "300px"}}>
      {/* <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt="project screenshot" /> */}
          <div className="card-content opaq-bg m-4"> 
              <h4 className="card-title mt-4">
                <strong>{props.title}</strong>
              </h4>
              <div className="card-body card-text pt-0">
                {props.details}<br></br>
                <div className="mt-1">
                  <a href={props.liveUrl}><strong>Go to Live Deployment</strong></a><br></br>
                  <a href={props.ghRepoUrl}><strong>Visit Github Repository</strong></a>
                </div>
              </div>
          </div>
      </div>
    </div>
   );
}

export default ProjectCard;