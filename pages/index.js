
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
    const colors = ["#3498db", "#e74c3c", "#6C757D", "#d64161", "#6b5b95", "#feb236", "#333333"];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  
  const projects = [
    {
      title: "Project 1",
      description: "A web application for managing tasks and to-do liA web application for managing tasks and to-do liA web application for managing tasks and to-do liA web application for managing tasks and to-do lists. Built using React and Redux.",
      link: "#dd", // Add a link to the project if available
    },
    {
      title: "Project 2",
      description: "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
      link: "#aa", // Add a link to the project if available
    },
    {
      title: "Project 2",
      description: "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
      link: "#", // Add a link to the project if available
    },
    {
      title: "Project 2",
      description: "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
      link: "#", // Add a link to the project if available
    },
    {
      title: "Project 2",
      description: "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
      link: "#", // Add a link to the project if available
    },
    // Add more projects here
  ];

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
        <div className="container">
          <h2>My Portfolio</h2><br></br>
          <div className="row masonary">
            {projects.map((project, index) => ( 
              <div className="col-md-4 mb-4" key={index}>
                                   
                                   <a href={project.link} className='a' >
                      <div className="card project-card" style={{ backgroundColor: getRandomColor() }}>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>

                      
                  </div>
                      
                </div></a>
              </div>
            ))}
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
