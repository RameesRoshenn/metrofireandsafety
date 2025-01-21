import React from 'react';
import Navigation from '../Components/Navigation';
import './about.css';


import Defines from './Defines';
import Aboutsection from './Aboutsection';
import Footer from '../Components/Footer';




function About() {
  return (
    <div>
      <Navigation />
      <div className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
        </div>
      </div>
     <Aboutsection />
      <Defines/>
      <Footer/>
     
      
      
    </div>
  );
}

export default About;
