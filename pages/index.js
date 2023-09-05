
import React from 'react';
import Layout from '../components/Layout';

function Home() {
  const languages = ["JavaScript", "Python", "C++", "Java", "Ruby", "HTML", "CSS"];
  const skills = ["Web Development", "Penetration Testing", "Competitive Programming", "Capture The Flag (CTF)"];
  const name = "Shovon";
  const email = "minar@duck.com";
  const asciiArt = (
    <pre>{`
    _______  __   __  _______  __   __  _______  __    _ 
    |       ||  | |  ||       ||  | |  ||       ||  |  | |
    |  _____||  |_|  ||   _   ||  |_|  ||   _   ||   |_| |
    | |_____ |       ||  | |  ||       ||  | |  ||       |
    |_____  ||       ||  |_|  ||       ||  |_|  ||  _    |
     _____| ||   _   ||       | |     | |       || | |   |
    |_______||__| |__||_______|  |___|  |_______||_|  |__|
                                        
     `} </pre>
  );

 
  const getRandomColor = () => {
    const colors = ["#d64161", "#FFC300", "#FF33EC", "#FF5733"];


    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <Layout>
 
 <section className="mt-4">
  <div className="container">
    <div className="row">
      <div className="col-md-12 ascii text-center">
     
        <div className="d-md-block ascii"> 
          {asciiArt}
        </div>
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
                    className="list-group-item custom-badge"
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
            {}
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="container">
          <h2>Contact Me</h2>    You can reach out to me via email at{' '}
            <a href={`mailto:${email}`}>{email}</a> {}
          
          {}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
