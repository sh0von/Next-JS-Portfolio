import React, { useState } from "react";

import Layout from "../components/Layout";
import {
  languages,
  skills,
  asciiArt,
  email,
  projects,
  getRandomColor,
  framework,
  ctfAchievements,
  socialMedia,
  getRandomGradientColor,
} from "../data";
import Script from 'next/script'
 
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
  const [displayedProjects, setDisplayedProjects] = useState(3);

  const loadMoreProjects = () => {
    setDisplayedProjects(displayedProjects + 3);
  };
  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-S04S8V0MHZ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-S04S8V0MHZ');
        `}
      </Script>
      <section className="mt-4 bounce">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ascii text-center">
              <div className="d-md-block ascii">{asciiArt}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4  bounce">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="description-text" style={{ textAlign: "center" }}>
                <br />
                I'm a passionate developer with a love for coding and a creative
                mind. I enjoy working on projects that challenge me and push my
                boundaries. When I'm not coding, you can find me exploring new
                technologies or working on personal projects.
              </p>
              <br></br>
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
              <br></br>
              <div className=" ">
                <h2 className="section-heading">Framework</h2>
                <div className="d-flex flex-wrap">
                  {framework.map((framework, index) => (
                    <span
                      key={index}
                      className="custom-tag"
                      style={{
                        background: getRandomGradientColor(),
                        marginBottom: "5px",
                      }}
                    >
                      {framework.name} - {framework.proficiency}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 box">
        <div className="container scale-up">
          <h2 className="section-heading">CTF Achievements</h2>
          <div className="row">
            {ctfAchievements.map((achievement, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card ctf-card"
                  style={{
                    background: getRandomGradientColor(),
                    color: "#fff",
                    position: "relative",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {}
                  <div className="ctf-position-background">
                    {achievement.position}
                  </div>

                  <div className="card-body">
                    <div className="ctf-icon">
                      <i className="fa fa-bug"></i>
                    </div>
                    <h3 className="card-title">{achievement.name}</h3>
                    <p className="card-text">{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4 box">
        <div className="container scale-up">
          <h2 className="section-heading">My Project</h2>
          <br />
          <div className="row masonary">
            {projects.slice(0, displayedProjects).map((project, index) => (
              <div className="col-md-4 mb-4 fadein" key={index}>
                <a
                  href={project.link}
                  className="a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card project-card"
                    style={{
                      background: getRandomGradientColor(),
                    }}
                  >
                    <div className="overlay"></div> {}
                    <div className="card-body">
                      <h5 className="card-title">
                        {project.title}
                        <span className="external-link-icon">
                          <i className="fa fa-link"></i>
                        </span>
                      </h5>
                      <p className="card-text">{project.description}</p>

                      {}
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-image"
                        />
                      )}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {displayedProjects < projects.length && (
            <div className="text-center mt-4">
              <button className="load-more-button " onClick={loadMoreProjects}>
                Load More <i className="fa fa-arrow-down"></i>
              </button>
            </div>
          )}
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
