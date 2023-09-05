
import React from 'react';
import Layout from '../components/Layout';




function About() {
    return (
      <Layout>
        <section className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>About Me</h2>
                <p>
                  Hi, I'm [Your Name], a passionate developer with a love for
                  creating programming languages and exploring new
                  technologies. This is my personal website where I share my
                  projects and experiences.
                </p>
              </div>
              <div className="col-md-6">
                {}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
  
 
  
export default About;
