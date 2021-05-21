import React from "react";
import ProjectCard from "../../components/ProjectCard";
import data from "../../assets/scripts/projectData";
// import "../../assets/images/brief-400.png";
// import "../../assets/images/employee-tracker-400.png";
// import "../../assets/images/employee-directory-400.png";
// import "../../assets/images/pet-seeker-palooza-400.png";
// import "../../assets/images/portfolio-400.png";
// import "../../assets/images/workout-tracker-400.png";

function Portfolio(props) {
  console.log(data)
    return (
      <div>
        <h1>Recent Projects</h1>
        <div className="row">
          {/* render cards for each project in json file */}
          {data.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              title={project.title}
              image={project.image}
              liveUrl={project.liveUrl}
              ghRepoUrl={project.ghRepoUrl}
              details={project.details}
            />
          ))}
        </div>
      </div>
    );
  }

export default Portfolio;