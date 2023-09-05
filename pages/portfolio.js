
import React from 'react';
import Layout from '../components/Layout';

function Portfolio() {
  return (
    <Layout>
      <section>
        <h2>My Portfolio</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </li>
          {}
        </ul>
      </section>
    </Layout>
  );
}

export default Portfolio;
