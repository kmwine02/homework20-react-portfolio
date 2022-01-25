function Resume() {
  return (
    <div className="main-body">
      <section className="section resume">
        <div className="title resume">
          <h3>Resume</h3>
          <div>
            <a
              href="https://drive.google.com/file/d/107bX73_8cca_2rqOq9BOYAaLdJcS-uFX/view?usp=sharing"
              target="_blank"
            >
              View my resume
            </a>
          </div>
        </div>
        <div className="info resume">
          <div>
            <h4>Front-end Proficiencies</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h4>Back-end Proficiencies</h4>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL - Sequalize</li>
              <li>MongoDB - Mongoose</li>
              <li>REST APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
