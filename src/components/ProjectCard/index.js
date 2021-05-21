import React from "react";
import "./style.css";
//import data from "../../scripts/projectData.json";

function ProjectCard(props) {
  //const image = props.image
  return (
    <div className="col-md-4">
      <div className="card my-1 project-card" style={{ backgroundImage: "url(" + props.image + ")", height: "300px"}}>
        {/* style={{backgroundImage: "url(" + image + ")", height: "300px"}} */}
        {/* <div style={{backgroundImage: "url(" + props.image + ")", width: 100}}></div> */}
      
        {/* className="img-container"<img alt={props.image} src={props.image} /> */}
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