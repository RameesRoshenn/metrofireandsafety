import React, { useEffect, useState } from 'react';

import './about.css';

import aboutimage from '../Assets/about2.png';





function Aboutsection() {

  const [count, setCount] = useState(0);
  const targetNumber = 13;
  
  useEffect(() => {
    setCount(0);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev < targetNumber) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      
      
      <div className="row row-1" >
        <div className="col-xs-12 col-md-6 about-text">
          <h2 className=' fw-semibold'>Expert Fire and Safety Solutions: Installation, Maintenance, and Compliance</h2>
          <h6 style={{color:'green'}}>FOUNDED IN 2012 </h6>
          <p>
          Metro Engineering founded in Malappuram in the year of 2012. We are Kerala's pioneer end to end solutions & services firm. An Industry expert with the area of design, consultancy, installation, testing, commissioning, maintenance and refurbishment of Fire Protection, Fire Fighting System & Reticulated Gas system.
          <br />
          For over 13 years we have been in the industry and keeping our clients happy and satisfied. We offer solution for all kind of NBC categorized building structures. We have designed, and commissioned Fire protection, Gas systems in numerous prestigious projects.
          <br />
          Metro Engineering has its own state of art of services in Kerala, in close connections with renowned governmental and certification bodies to provide key answers to the challenges faced by the society.


          </p>
          <div className=" text-center mb-5">
  <div className="d-flex  align-items-center">
    <div className="experience-box ">
      <span className="experience-number">{count}+</span>
    </div>
    <div className="experience-text ms-3 ">
      <div>Years</div>
      <div>Working</div>
      <div>Experience</div>
    </div>
  </div>
</div>

        </div>
        <div className="col-xs-12 col-md-6 about-images">
          <img src={aboutimage} alt="Lotus" className="image2" />
        </div>
       
      </div>

    
   
    
      
      
    </div>
  );
}

export default Aboutsection;
