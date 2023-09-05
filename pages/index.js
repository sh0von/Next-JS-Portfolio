import React from "react";
import Layout from "../components/Layout";
import {
  languages,
  skills,
  asciiArt,
  email,
  projects,
  getRandomColor,
} from "../data";

function Skill({ name, percentage }) {
  const skillStyle = {
    padding: "5px",
    marginBottom: "10px",
  };

  const animationDuration = `${percentage * 0.02}s`;

  const skillBarStyle = {
    width: `${percentage}%`,
    height: "100%",
    backgroundColor: getRandomColor(),
    animation: `skillAnimation-${percentage} ${animationDuration} ease-in-out`,
  };

 
  const dynamicKeyframes = `
    @keyframes skillAnimation-${percentage} {
      0% {
        width: 0;
      }
      100% {
        width: ${percentage}%;
      }
    }
  `;

  return (
    <div style={skillStyle}>
      <div>{name}</div>
      <div className="progress">
        <style>{dynamicKeyframes}</style> {}
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
                style={{
                  backgroundColor: getRandomColor(),
                  marginBottom: "5px",
                }}
              >
                {language.name} - {language.proficiency}
              </span>
            ))}
          </div><section className="mt-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2>Contact Me</h2>
        <p>
          You can reach out to me via email at{' '}
          <a href={`mailto:${email}`}>{email}</a>.
        </p>
        <ul className="list-inline social-media">
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
                 </ul>
      </div>
    </div>
  </div>
</section>

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
