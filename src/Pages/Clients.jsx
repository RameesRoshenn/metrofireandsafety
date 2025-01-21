import React, { useState, useEffect, useRef } from 'react';
import './clients.css';

import logo1 from '../Assets/Clients/arafath.jpg';
import logo2 from '../Assets/Clients/astermims.jpeg';
import logo3 from '../Assets/Clients/ayurheritage.jpeg';
import logo4 from '../Assets/Clients/babu.jpg';
import logo5 from '../Assets/Clients/d&e.jpg';
import logo6 from '../Assets/Clients/hilite.jpg';
import logo7 from '../Assets/Clients/m&s.png';
import logo8 from '../Assets/Clients/markaz.jpg';
import logo9 from '../Assets/Clients/d3.jpg';
import logo10 from '../Assets/Clients/bn.jpg';
import logo11 from '../Assets/Clients/shabeer.jpg';



import membershipImage from '../Assets/bni.png'; 

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];

function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  // Automatically change the center photo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  // Handle dragging start
  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  // Handle dragging movement
  const handleMouseMove = (e) => {
    if (!dragging) return;

    const moveX = (e.clientX || e.touches[0].clientX) - startX;
    if (moveX > 50) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length); // Move to previous logo
      setStartX(e.clientX || e.touches[0].clientX);
    } else if (moveX < -50) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length); // Move to next logo
      setStartX(e.clientX || e.touches[0].clientX);
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    setDragging(false);
  };

  // Function to handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      className="clients-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <h2 className="clients-heading">OUR VALUED CLIENTS</h2>
      <div className="carousel" ref={carouselRef}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className={`carousel-logo ${index === activeIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - activeIndex) * 120}px)`, // Apply drag/swipe movement
            }}
          />
        ))}
      </div>
      <div className="dots">
        {logos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index)} // Add click handler
          ></span>
        ))}
      </div>

      {/* New Section for "OUR MEMBERSHIP" */}
      <section className="membership-section">
        <h3 className="membership-heading">OUR MEMBERSHIP</h3>
        <img src={membershipImage} alt="Membership" className="membership-image" />
      </section>
    </div>
  );
}

export default Clients;
