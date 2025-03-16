import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';

import logo from '../Assets/logo.png';
import smallScreenLogo from '../Assets/smallScreenLogo.png';

function Navigation() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Navbar
      className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}
      expand="lg"
      fixed="top"
    >
      <div className="container">
        <Navbar.Brand href="#page-top" className="d-flex align-items-center company-name">
          {!isSmallScreen ? (
            <>
              <img
                src={logo}
                width="100%"
                height="70"
                className="d-inline-block align-top"
                alt="Large Logo"
              />
              <div className="brand-text">
                <div className="brand-line1">METRO</div>
                <div className="brand-line2">ENGINEERING</div>
                <p className="brand-line3">Fire & Safety Solutions</p>
              </div>
            </>
          ) : (
            <img
              src={smallScreenLogo}
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt="Small Screen Logo"
            />
          )}
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`custom-toggler ${isCollapsed ? 'collapsed' : ''}`}
          onClick={handleToggle}
        >
          <i className="bi bi-menu-button-wide text-dark"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link mx-2" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link mx-2" href="/about">About</Nav.Link>
            <Nav.Link className="nav-link mx-2" href="/services">Services</Nav.Link>
            <Nav.Link className="nav-link mx-2" href="/projects">Projects</Nav.Link>
            <Nav.Link className="nav-link mx-2" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
