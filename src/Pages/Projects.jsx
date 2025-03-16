import React from 'react';
import projectsData from '../Assets/data.json';
import './projects.css';
import Navigation from '../Components/Navigation';

function Projects() {
  return (
    <div>
      <Navigation />
      <div className="project-section">
        <div className="projrct-content">
          <h1>Projects</h1>
        </div>
      </div>
      <div className="product-section container mt-1">
        <div className="product-head">
          <h1>Our Projects</h1>
        </div>
        <div className="row">
          {projectsData.Projectdata.map((project) => (
            <div key={project.id} className="col-md-3">
              <div className="product-item">
                <div className="product-image">
                  <img src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                </div>
                <div className="product-details">
                  <h4>{project.title}</h4>
                  <h5>{project.place}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
