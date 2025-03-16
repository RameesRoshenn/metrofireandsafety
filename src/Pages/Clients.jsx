import React, { useState, useEffect, useRef } from "react";
import "./clients.css";

import logo1 from "../Assets/Clients/arafath.jpg";
import logo2 from "../Assets/Clients/astermims.jpeg";
import logo3 from "../Assets/Clients/ayurheritage.jpeg";
import logo4 from "../Assets/Clients/babu.jpg";
import logo5 from "../Assets/Clients/d&e.jpg";
import logo6 from "../Assets/Clients/hilite.jpg";
import logo7 from "../Assets/Clients/m&s.png";
import logo8 from "../Assets/Clients/markaz.jpg";
import logo9 from "../Assets/Clients/d3.jpg";
import logo10 from "../Assets/Clients/bn.jpg";
import logo11 from "../Assets/Clients/shabeer.jpg";

import membershipImage from "../Assets/bni.png";

const initialLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11
];

function Clients() {
  const [logos, setLogos] = useState(initialLogos);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  // Auto change logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      rotateLogos();
    }, 2000);

    return () => clearInterval(interval);
  }, [logos]);

  // Function to rotate logos
  const rotateLogos = () => {
    setLogos((prevLogos) => {
      const newLogos = [...prevLogos.slice(1), prevLogos[0]]; // Move first logo to last
      return newLogos;
    });
    setActiveIndex(0);
  };

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
      rotateLogos(); // Swipe left
      setStartX(e.clientX || e.touches[0].clientX);
    } else if (moveX < -50) {
      setLogos((prevLogos) => {
        const newLogos = [prevLogos[prevLogos.length - 1], ...prevLogos.slice(0, -1)]; // Move last logo to first
        return newLogos;
      });
      setStartX(e.clientX || e.touches[0].clientX);
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    setDragging(false);
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
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className={`carousel-logo ${index === 0 ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <section className="membership-section">
        <h3 className="membership-heading">OUR MEMBERSHIP</h3>
        <img src={membershipImage} alt="Membership" className="membership-image" />
      </section>
    </div>
  );
}

export default Clients;
