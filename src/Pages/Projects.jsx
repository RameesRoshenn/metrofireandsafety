import React from 'react';
import projectsData from '../Assets/data.json'; // Adjust the path to your JSON file
import './projects.css'; // Adjust the path to your CSS file

import seazone from '../Assets/Project/seazone.jpg';
import airportgarden from '../Assets/Project/airport garden1.jpeg';
import hotelsulthan from '../Assets/Project/hotelsulthan.jpeg';
import shalimar from '../Assets/Project/shalimar.avif';
import oyo from '../Assets/Project/oyoroom.jpg'

import Navigation from '../Components/Navigation';

const ProjectimageMap = {
    1: seazone,
    2: airportgarden,
    3: hotelsulthan,
    4: shalimar,
    5:oyo
};

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
            
            <h1 >Our Projects</h1>
          </div>
          <div className="row">
            {projectsData.Projectdata.map((project) => (
              <div key={project.id} className="col-md-3">
                <div className="product-item">
                  <div className="product-image">
                    <img src={ProjectimageMap[project.id]} alt={project.title} />
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