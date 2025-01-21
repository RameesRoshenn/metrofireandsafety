import React from 'react';
import './about.css'; 

import { Shield, CheckCircle, HandshakeIcon, Link } from 'lucide-react';
import image2 from '../Assets/about1.png';
import { Button } from 'react-bootstrap';

function Homeabout() {
  const values = [
    {
      icon: <CheckCircle size={48} className="core-value-icon text-danger" />,
      title: 'Quality'
    },
    {
      icon: <Shield size={48} className="core-value-icon text-danger" />,
      title: 'Integrity'
    },
    {
      icon: <HandshakeIcon size={48} className="core-value-icon text-danger" />,
      title: 'Respect'
    },
    {
      icon: <Link size={48} className="core-value-icon text-danger" />,
      title: 'Together'
    }
  ];

  return (
    <div className="row row-1">
      <div className="col-xs-12 col-md-6 homeabout-text">
        <h2 className="fw-semibold">Why Choose Us!</h2>
        <h3 className="fw-bolder text-danger">WHY METRO? </h3>
        <p>
          As an impartial service provider, we are not restricted to any single brand or proprietary product. This independence allows us to choose the best solutions available, ensuring that we deliver precise installation and expert maintenance. While some may prioritize only technical compliance, we aim for flawless execution and optimal performance in every project.
        </p>

        <div className="container ">
          <h2 className="section-title fw-bolder mb-4 mt-5">Our Core Values</h2>
          
            <div className="row g-4 ">
              {values.map((value, index) => (
                <div key={index} className="col-6 d-flex align-items-center core-value-item">
                  <div className="me-3">
                    {value.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-0">{value.title}</h3>
                </div>
              ))}
            </div>
          
        </div>

        <div className="d-flex align-items-center justify-content-center mt-5 mb-2 ">
          <Button className="about-button mb-3" href="/about">
            Read More
          </Button>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 about-images">
        <img src={image2} alt="Lotus" className="image2" />
      </div>
    </div>
  );
}

export default Homeabout;
