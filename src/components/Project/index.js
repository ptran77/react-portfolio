function Project(props) {
  // get project from props
  const { project } = props;

  // deconstruct project information
  const { name, img, link, github, tool } = project;
  const backgroundImage = "background-image: url('../../projectImg/" + img + "')";

  return (
    <div class="project" style={backgroundImage}>
      <h3>
        <a href={link} class="project-name">{name}</a>
        <a href={github} class="project-link"><i class="fa fa-github" /></a>
      </h3>
      <h3 class="project-tool">{tool}</h3>
    </div>
  )
}

export default Project;