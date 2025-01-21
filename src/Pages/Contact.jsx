import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import './contact.css';
import Image1 from '../Assets/fireconsultant.jpg';

import { FaPhone } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDescription: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.projectDescription,
    };

    emailjs.send('service_vzk3ese', 'template_5da4ilc', templateParams, 'c2JbvBhFl_bzrJdwN')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div>
      <Navigation />
      <div className="contact-section">
        <div className="contact-content">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-info">
        <h5>Thank you for reaching out to us! We aim to respond to all inquiries within two business days. If you need immediate assistance, please call us during our regular business hours.</h5>
        <div className="logo-container">
          <FaPhone />
          <p>+91 9846860029</p>
        </div>
      </div>
      <div className="contact-form">
        <div className="image-container">
          <img src={Image1} alt="Contact Background" />
          <div className="image-text">
            <h2>Inquire With Us</h2>
            <p>Enter your info and we'll call you back to discuss your project a bit more...</p>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="projectDescription">Message</label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
              />
            </div>
            <button type="submit ">Submit</button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;
