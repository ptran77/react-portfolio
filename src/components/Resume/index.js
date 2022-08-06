function Resume() {
  return (
    <div>
      <h3>Resume</h3>
      <div>Download my <a href="./assets/resume/Peter-resume.pdf" download>Resume</a></div>
      <div className="skills">
        <div className="front-end">
          <h4>Front-End Proficiencies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div classname="back-end">
          <h4>Back-End Proficiencies</h4>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQl</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume;