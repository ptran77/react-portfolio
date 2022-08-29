import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  // Project list
  const [projects] = useState([
    {
      name: "Purly",
      img: "",
      link: "https://purly.herokuapp.com/",
      github: "https://github.com/hectorromo06/purly",
      tool: "MERN"
    },
    {
      name: "Garden Planner",
      img: "garden-planner.png",
      link: "https://garden-planner-90482.herokuapp.com/",
      github: "https://github.com/ptran77/garden-planner",
      tool: "Full-Stack"
    },
    {
      name: "Anime4You",
      img: "anime4you.png",
      link: "https://diegorivera1110.github.io/anime4you/",
      github: "https://github.com/Diegorivera1110/anime4you",
      tool: "Front-End"
    },
    {
      name: "Book Search Engine",
      img: "book-search-engine.png",
      link: "https://book-search-engine-81347.herokuapp.com/",
      github: "https://github.com/ptran77/book-search-engine",
      tool: 'MERN, GraphQl'
    },
    {
      name: "Budget Tracker",
      img: "budget-tracker.png",
      link: "https://budget-tracker-26833.herokuapp.com/",
      github: "https://github.com/ptran77/budget-tracker",
      tool: "PWA"
    },
    {
      name: "Social Network API",
      img: "social-network-api.gif",
      link: "https://drive.google.com/file/d/1XpSZu62JcIR9g-mRF5qgI4WSOmDGrXy-/view",
      github: "https://github.com/ptran77/social-network-api",
      tool: "NoSQL"
    },
    {
      name: "Tech Blog",
      img: "tech-blog.png",
      link: "https://pt-tech-blog-2022.herokuapp.com/",
      github: "https://github.com/ptran77/tech-blog",
      tool: "MVC"
    },
    {
      name: "E-commerce Back End",
      img: "e-commerce-back-end.gif",
      link: "https://drive.google.com/file/d/1tRGX0NGGXI8P3nzUzeRMnxcY10K1DDLM/view?usp=sharing",
      github: "https://github.com/ptran77/e-commerce-back-end",
      tool: "ORM"
    }
  ]);

  return (
    <div className="portfolio bg-dark text-white m-5 p-5 rounded">
      <h2>Portfolio</h2>
      <div className="project-list row">
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