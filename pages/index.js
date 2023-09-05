import React from "react";
import Layout from "../components/Layout";
import {
  languages,
  skills,
  asciiArt,
  email,
  projects,
  getRandomColor,
  colors,
} from "./data";

function Skill({ name, percentage }) {
  const skillColor = colors();
  const skillStyle = {
    padding: "5px",
    marginBottom: "10px",
  };

  const skillBarStyle = {
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: skillColor,
  };

  return (
    <div style={skillStyle}>
      <div>{name}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={skillBarStyle}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
}
function Home() {
  return (
    <Layout>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ascii text-center">
              <div className="d-md-block ascii">{asciiArt}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 box">
        <div className="container">
          <div className="row ">
          <div className="col-md-6">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
            <div className="col-md-6 ">
              <h2>Languages</h2>
              <div className="d-flex flex-wrap">
                {languages.map((language, index) => (
                  <span
                    key={index}
                    className="custom-tag"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 box">
        <div className="container">
          <h2>My Portfolio</h2>
          <br></br>
          <div className="row masonary">
            {projects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <a href={project.link} className="a">
                  <div
                    className="card project-card"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="container">
          <h2>Contact Me</h2> You can reach out to me via email at{" "}
          <a href={`mailto:${email}`}>{email}</a> {}
          {}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
