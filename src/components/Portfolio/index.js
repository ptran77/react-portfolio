import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
  // Project list
  const [projects] = useState([
    {
      name: "Purly",
      img: "purly.png",
      link: "https://purly.herokuapp.com/",
      github: "https://github.com/hectorromo06/purly",
      tool: "MERN",
      description: `Knitters from all over can relate to feeling the motivation to create something beautiful - but another thing they can relate to is not knowing where to start. 
      Introducing Purly, a simplified application that renders a pattern for our users depending on specific inputs.
      Tell us your skill-level, what type of yarn you like to work with, even needle size! No need to worry about endless browsing online - everything is here for you already! Well, as we like to say here at Purly, "let's make something!".`,
      built: 'GraphQL, MongoDB, Node.js, Express.js, JWT, React, UIKit'
    },
    {
      name: "Garden Planner",
      img: "garden-planner.png",
      link: "https://garden-planner-90482.herokuapp.com/",
      github: "https://github.com/ptran77/garden-planner",
      tool: "Full-Stack",
      description: `How does your garden grow?
      Oh, not sure yet? Well, let's fix that. Our application is dedicated to those seeking to learn about gardening. 
      Personalize your garden by adding what you're growing from our plant database. After adding your plants to your garden, 
      you can access the specific needs of each of your plants. Need a little motivation on what to grow? Well, that's what 
      the community is for! Once you're signed up, you have access to see what other gardeners are growing. Our application 
      is a simple tool for beginner gardeners to build their own garden and connect with those that already have!`,
      built: 'MySQL, Sequelize, Node.js, Express.js, Handlebars, Tailwind'
    },
    {
      name: "Anime4You",
      img: "anime4you.png",
      link: "https://ptran77.github.io/anime4you/",
      github: "https://github.com/ptran77/anime4you",
      tool: "Front-End",
      description: `Don't have time to watch or keep track of anime. Our application is dedicated to anime lovers to stay on track with anime.
      Create and modify your own personal watchlist. Users can see the current and most popular anime, search for specfic anime or by genre, 
      and add or delete anime from their watchlist. Additionaly, users can view recommendations for anime.`,
      built: 'APIs, Javascript, HTML, CSS, Bootstrap'
    },
    {
      name: "Book Search Engine",
      img: "book-search-engine.png",
      link: "https://book-search-engine-81347.herokuapp.com/",
      github: "https://github.com/ptran77/book-search-engine",
      tool: 'MERN, GraphQl',
      description: `A fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server.`,
      built: 'MERN, GraphQl, MongoDB'
    },
    {
      name: "Budget Tracker",
      img: "budget-tracker.png",
      link: "https://budget-tracker-26833.herokuapp.com/",
      github: "https://github.com/ptran77/budget-tracker",
      tool: "PWA",
      description: 'Application that allows users to keep track of their money and their withdrawals and deposits.',
      built: 'Offline-capablilty'
    },
    {
      name: "Social Network API",
      img: "social-network-api.gif",
      link: "https://drive.google.com/file/d/1XpSZu62JcIR9g-mRF5qgI4WSOmDGrXy-/view",
      github: "https://github.com/ptran77/social-network-api",
      tool: "NoSQL",
      description: `An API for social network applications where users can share their thoughts, react to friends' thoughts, and create a friend list.`,
      built: 'Express.js, MongoDB, Mongoose ODM, Moment.js'
    },
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
