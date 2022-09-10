import React from 'react';

function Project(props) {
  // get project from props
  const { project } = props;

  // deconstruct project information
  const { name, img, link, github, tool, description, built } = project;

  const divStyle = {
    backgroundImage: `url("./assets/img/${img}")`,
    backgroundSize: 'cover',
    height: '150px'
  }
  return (
    <div className="project">
      <div className="text-black col-6 col-sm-12 m-2" style={divStyle}>
        <div className="project-info p-3">
          <h3>
            <a href={link} className="project-link p-2 ">{name}</a>
            <a href={github} className="project-github"><i className="fa fa-github" /></a>
          </h3>
          <h3 className="project-tool p-2">{tool}</h3>
        </div>
      </div>
      <div className='pt-2 px-2'>Built with: {built}</div>
      <div className='px-2'>{description}</div>
    </div>
  )
}

export default Project;