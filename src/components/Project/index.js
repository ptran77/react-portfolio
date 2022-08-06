function Project(props) {
  // get project from props
  const { project } = props;

  // deconstruct project information
  const { name, img, link, github, tool } = project;
  console.log(img);

  const divStyle = {
    backgroundImage: 'url("../../projectImg/' + img,
    width: '500px',
    height: '150px'
  }
  return (
    <div className="project" style={divStyle}>
      <h3>
        <a href={link} className="project-name">{name}</a>
        <a href={github} className="project-link"><i className="fa fa-github" /></a>
      </h3>
      <h3 className="project-tool">{tool}</h3>
    </div>
  )
}

export default Project;