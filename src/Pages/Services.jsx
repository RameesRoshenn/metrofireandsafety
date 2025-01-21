import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer'
import './services.css';
import { Button } from 'react-bootstrap';
import Servicesdata from '../Assets/data.json';



import fireextinguisher from '../Assets/fireextinguisher.jpg';
import firenoc from '../Assets/firenoc.jpg';
import firehydrantsystem from '../Assets/firehydrantsystem.jpg';
import sprinklersystem from '../Assets/sprinklersystem.jpg';
import pumpriser from '../Assets/pumpriser.jpg'
import firesystem from '../Assets/firesystem.jpg'
import publicsystem from '../Assets/publicsystem.jpg'
import fireconsultant from '../Assets/fireconsultant.jpg'
import gassyetm from '../Assets/gassyetm.jpg'
import refurbisment from '../Assets/refurbisment.jpg'
import annaulcontract from '../Assets/annaulcontract.jpg'


const ServiceimageMap = {
  1: fireextinguisher,
  2: firenoc,
  3: firehydrantsystem,
  4: sprinklersystem,
  5:pumpriser,
  6:firesystem,
  7:publicsystem,
  8:fireconsultant,
  9:gassyetm,
  10:refurbisment,
  11:annaulcontract

};



function Services() {
  return (
    <div>
      <Navigation />
      <div className="services-section">
        <div className="services-content">
          <h1>Our Services</h1>
        
        </div>
      </div>
      <div className="service-card" style={{backgroundColor: 'whitesmoke'}}>
      <div className='top-title d-flex justify-content-center  flex-column align-items-center'>
        <h5 className='text-dark mt-5'>WE FOCUSED ON</h5>
       <h3 className=' text-danger  '> Design, Supply and Installation of</h3>
      </div>
  <div className="services-container">
    {Servicesdata.Servicesdata.map((service) => (
      <div key={service.id} className="service">
        <img src={ServiceimageMap[service.id]} alt={service.title} className="service-image" />
        <div className="service-text">
          <h2 className='fw-bold'>{service.title}</h2>
          <p className='text-danger '>{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="service-last">
        <h3>"Are you looking to enhance your fire safety measures? Contact us today to schedule a consultation!."</h3>
        <Button className="custom-button2" href='/contact'>CONTACT US</Button>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
