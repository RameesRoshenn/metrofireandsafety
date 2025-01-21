import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';

import logo from '../Assets/logo.png';
import smallScreenLogo from '../Assets/smallScreenLogo.png';

function Navigation() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Track collapse state

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Update based on your breakpoint
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener('resize', checkScreenSize); // Add event listener

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state
  };

  return (
    <Navbar className="navbar" style={{ backgroundColor: 'white' }} expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#page-top" className="d-flex align-items-center company-name">
          {!isSmallScreen && (
            <>
              <img
                src={logo}
                width="100%"
                height="70"
                className="d-inline-block align-top "
                alt="Large Logo"
              />
              <div className="brand-text">
                <div className="brand-line1">METRO</div>
                <div className="brand-line2">ENGINEERING</div>
                <p className="brand-line3">Fire & Safety Solutions</p>
              </div>
            </>
          )}
          {isSmallScreen && (
            <img
              src={smallScreenLogo}
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt="Small Screen Logo"
            />
          )}
        </Navbar.Brand>

        {/* Navbar toggle button with Bootstrap icon */}
        <Navbar.Toggle
  aria-controls="basic-navbar-nav"
  className={`custom-toggler ${isCollapsed ? 'collapsed' : ''}`}
  onClick={handleToggle}
>
  <i className={`bi bi-menu-button-wide text-dark`}></i> {/* Icon will always be dark */}
</Navbar.Toggle>


        {/* Navbar links */}
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
