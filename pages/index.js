// pages/index.js
import React from 'react';
import Layout from '../components/Layout';

function Home() {
  const languages = ["JavaScript", "Python", "C++", "Java", "Ruby", "HTML", "CSS"]; // Add your languages here
  const skills = ["Web Development", "Penetration Testing", "Competitive Programming", "Capture The Flag (CTF)"]; // Updated your skills here
  const name = "Shovon"; // Updated your name
  const email = "minar@duck.com"; // Updated your email
  const asciiArt = (
    <pre>
      _______  __   __  _______  __   __  _______  __    _ 
     |       ||  | |  ||       ||  | |  ||       ||  |  | |
     |  _____||  |_|  ||   _   ||  |_|  ||   _   ||   |_| |
     | |_____ |       ||  | |  ||       ||  | |  ||       |
     |_____  ||       ||  |_|  ||       ||  |_|  ||  _    |
      _____| ||   _   ||       | |     | |       || | |   |
     |_______||__| |__||_______|  |___|  |_______||_|  |__|
    </pre>
  );

  // Function to generate a random background color
  const getRandomColor = () => {
    const colors = ["#FF5733", "#FFC300", "#FF33EC", "#1C1C1C", "", "#333333"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <Layout>
      <section className="hero mt-5">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="hero-content">
                <h1 className="display-2">Welcome to My Website</h1>
                <p className="lead">
                  Explore my projects, learn about me, and get in touch.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-image">
                {/* Add an image here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {asciiArt}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 box">
        <div className="container">
          <div className="row ">
          
            <div className="col-md-6 ">
              <h2>Skills</h2>
              <ul className="list-group">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="list-group-item custom-badge" // Add custom-badge class for styling
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {skill}
                  </li>
                ))}
              </ul><br></br>
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
        <div className="container ">
          <h2>My Portfolio</h2><br></br>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">Description of Project 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">Description of Project 2.</p>
                </div>
              </div>
            </div>
            {/* Add more project cards here */}
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <h2>Contact Me</h2>    You can reach out to me via email at{' '}
            <a href={`mailto:${email}`}>{email}</a> {/* Updated your email */}
          
          {/* You can also add a contact form here */}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
