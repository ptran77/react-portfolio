import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Garden Planner",
      link: "https://garden-planner-90482.herokuapp.com/",
      github: "https://github.com/ptran77/project-2",
      tool: "Full-Stack"
    },
    {
      name: "Anime4You",
      link: "https://diegorivera1110.github.io/anime4you/",
      github: "https://github.com/Diegorivera1110/anime4you",
      tool: "Front-End"
    },
    {
      name: "Budget Tracker",
      link: "https://budget-tracker-26833.herokuapp.com/",
      github: "https://github.com/ptran77/budget-tracker",
      tool: "PWA"
    },
    {
      name: "Social Network API",
      link: "https://drive.google.com/file/d/1XpSZu62JcIR9g-mRF5qgI4WSOmDGrXy-/view",
      github: "https://github.com/ptran77/social-network-api",
      tool: "NoSQL"
    },
    {
      name: "Tech Blog",
      link: "https://pt-tech-blog-2022.herokuapp.com/",
      github: "https://github.com/ptran77/tech-blog",
      tool: "MVC"
    },
    {
      name: "E-commerce Back End",
      link: "https://drive.google.com/file/d/1tRGX0NGGXI8P3nzUzeRMnxcY10K1DDLM/view?usp=sharing",
      github: "https://github.com/ptran77/e-commerce-back-end",
      tool: "ORM"
    }
  ]);

  return (
    <div>
      <h2>Portfolio</h2>
      <div class="project-list">
        { // Make a Project Component for each project
          projects.map((project) => (
            <Project project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio;