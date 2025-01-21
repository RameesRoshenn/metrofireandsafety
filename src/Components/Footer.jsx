import React from 'react';

import { MapPin, Facebook,  Instagram,  Mail,  } from 'lucide-react';

import { FaWhatsapp } from "react-icons/fa";

import './footer.css'

function Footer() {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/7srgnJBwPjJTtYqi8', '_blank');
  };

  return (
    <footer className="footer">
      {/* Logo Section */}
      

      {/* Footer Content */}
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-column">
          <h3 className="footer-title">Our Address</h3>
          <p>Near GMLP School</p>
          <p>Thalakkadathur, Tirur</p>
          <p>Malappuram Dt. Kerala - 676103</p>
          <p>Phone: +91 8943332058 , +91 9846860029</p>
        </div>

        {/* Services Section */}
        <div className="footer-column">
          <h3 className="footer-title">Our Services</h3>
          <ul>
            <li>Fire Hydrant System</li>
            <li>Fire Extinguiser Refilling</li>
            <li>Reticulated Gas System</li>
            <li>Sprinkler System</li>
            <li>Refurbisment of System</li>
          </ul>
        </div>

        {/* Social Media and Map Section */}
        <div className="footer-column">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/15b4KhCp1r/">
              <Facebook className="icon" />
            </a>
            <a href="mailto:metrofiretirur994@gmail.com?subject=Inquiry&body=Hello, I would like to connect with your company.">
              <Mail className="icon" />
            </a>
            <a href="https://www.instagram.com/fire__safety_metro_tirur?igsh=ejhvamt5MHBqa242">
              <Instagram className="icon" />
            </a>
            <a href="https://wa.me/919846860029">
              <FaWhatsapp className="icon" />
            </a>
          </div>
          <button onClick={handleMapClick} className="map-button">
            <MapPin className="icon" />
            <span>Find us on Google Maps</span>
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


