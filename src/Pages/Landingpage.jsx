import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingpage.css';


import home1 from '../Assets/home1.jpg';
import home01 from '../Assets/home01.jpg';
import home2 from '../Assets/home2.jpg';
import home3 from '../Assets/home3.jpg';
import home4 from '../Assets/home4.jpg';

import home5 from '../Assets/home5.jpg';
import home6 from '../Assets/home6.jpg';
import home7 from '../Assets/home7.jpg';
import home8 from '../Assets/home8.jpg';

function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSecondaryImageIndex, setCurrentSecondaryImageIndex] = useState(0);
  const [currentText, setCurrentText] = useState({
    title: "Expert Safety Solutions You Can Rely On Every Day",
    subtitle: "Protect What Matters Most with Our Expert Fire Protection and Reticulated Gas System Services",
  });

  const images = [home1, home01, home2, home3, home4];
  const secondaryImages = [home5, home6, home7, home8];
  const textContent = [
    {
      title: "Expert Safety Solutions You Can Rely On Every Day",
      subtitle: "Protect What Matters Most with Our Expert Fire Protection and Reticulated Gas System Services",
    },
    {
      title: "Secure Your Space with Modern Safety Standards",
      subtitle: "Enhancing Your Safety with High-Quality Fire and Gas Systems",
    },
    {
      title: "Reliability Meets Safety in Every Service",
      subtitle: "Your Safety is Our Priority, Every Day and Everywhere",
    },
    {
      title: "Innovation for a Safer Tomorrow",
      subtitle: "Leading the Way in Fire Protection and Gas Solutions",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentText(textContent[(currentImageIndex + 1) % textContent.length]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length, textContent]);

  useEffect(() => {
    const updateSecondaryImages = () => {
      const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
      if (isSmallScreen) {
        const intervalId = setInterval(() => {
          setCurrentSecondaryImageIndex((prevIndex) => (prevIndex + 1) % secondaryImages.length);
        }, 7000);

        return () => clearInterval(intervalId);
      }
    };

    updateSecondaryImages();

    window.addEventListener('resize', updateSecondaryImages);

    return () => {
      window.removeEventListener('resize', updateSecondaryImages);
    };
  }, [secondaryImages.length]);

  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
   
      <div
        className="intro"
        style={{
          backgroundImage: `url(${isSmallScreen ? secondaryImages[currentSecondaryImageIndex] : images[currentImageIndex]})`,
        }}
      >
        <div className="overlay">
          <Container>
            <Row>
              <Col className="intro-text">
                <h1 className="fade-in">{currentText.title}</h1>
                <h4 className="fade-in">{currentText.subtitle}</h4>
                <Button className="custom-button" href="/services">
                  About Us
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    
   
  );
}

export default LandingPage;
