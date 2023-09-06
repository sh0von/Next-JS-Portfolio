import React from "react";
import Layout from "../components/Layout";
import {
  languages,
  skills,
  asciiArt,
  email,
  projects,
  getRandomColor,
  ctfAchievements,
  socialMedia,
  getRandomGradientColor,
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
    background: getRandomGradientColor(),
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
      <section className="mt-4 fadein">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ascii text-center">
              <div className="d-md-block ascii">{asciiArt}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 box bounce">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <h2 className="section-heading">Skills</h2>
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            <div className="col-md-6 ">
              <h2 className="section-heading">Languages</h2>
              <div className="d-flex flex-wrap">
                {languages.map((language, index) => (
                  <span
                    key={index}
                    className="custom-tag"
                    style={{
                      background: getRandomGradientColor(),
                      marginBottom: "5px",
                    }}
                  >
                    {language.name} - {language.proficiency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 box ">
        <div className="container scale-up">
          <h2 className="section-heading">CTF Achievements</h2>
          <div className="row">
            {ctfAchievements.map((achievement, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card ctf-card"
                  style={{
                    background: getRandomGradientColor(),
                    color:"#fff"
                  }}
                >
                  <div className="card-body">
                    <div className="ctf-icon">
                      <i className="fa fa-bug"></i>
                    </div>
                    <h3 className="card-title">{achievement.name}</h3>
                    <p className="card-text">{achievement.position}</p>
                    <p className="card-text">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4 box">
        <div className="container">
          <h2 className="section-heading">My Project</h2>
          <br></br>
          <div className="row masonary">
          {projects.map((project, index) => (
  <div className="col-md-4 mb-4 slide " key={index}>
    <a href={project.link} className="a" target="_blank" rel="noopener noreferrer">
      <div
        className="card project-card"
        style={{
          background: getRandomGradientColor(),
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {project.title}
            <span className="external-link-icon">
              <i className="fa fa-link" ></i>
            </span>
          </h5>
          <p className="card-text">{project.description}</p>
        </div>
      </div>
    </a>
  </div>
))}

          </div>
        </div>
      </section>
      <section className="mt-4 ">
        <div className="container ">
          <div className="row">
            <div className="col-md-6  ">
              <h2 className="section-heading">Contact Me</h2>
              <p>
                You can reach out to me via email at{" "}
                <a href={`mailto:${email}`}>{email}</a>.
              </p>
              <ul className="list-inline social-media">
                {socialMedia.map((profile, index) => (
                  <li className="list-inline-item" key={index}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={profile.iconClass}
                        style={{ color: profile.color }}
                      ></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
