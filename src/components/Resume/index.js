function Resume() {
  return (
    <div className="resume bg-dark text-white m-5 p-5 rounded">
      <h3>Resume</h3>
      <div className="resume-link py-1">Download my <a className="resume-download" href="./assets/resume/Resume.docx" download>Resume</a></div>
      <div className="skills py-2">
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