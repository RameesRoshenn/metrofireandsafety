import React from 'react'
import './defines.css'
import { Container, Row, Col } from 'react-bootstrap';
import { RiTeamLine } from "react-icons/ri";
import { IoMdClock } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { VscVerified } from 'react-icons/vsc';
import { FaHandsHelping } from 'react-icons/fa';

const defines= [
    {
      icon: <RiTeamLine size={48} />, 
      title: 'The Team of Experts',
      description: "Our team includes certified professionals in the fire and safety industry."
    },
    {
      icon: <IoMdClock size={48} />,
      title: 'Steadfast Support',
      description: 'Trust us to get the job done'
    },
    {
      icon: <VscWorkspaceTrusted size={48} />,
      title: 'Guaranteed Excellence',
      description: 'We stand behind our services'
    },
    {
      icon: <SlCalender size={48} />,
      title: '23 Years In Business',
      description: 'Our company is committed to long-term excellence'
    },
    {
        icon: <VscVerified size={48} />, 
        title: 'Integrity in Service',
        description: 'Adhering to the highest standards of ethics and professionalism in every project.'
    },
    {
        icon: <FaHandsHelping size={48} />, 
        title: 'Together We Secure',
        description: 'Partnering with communities to create safer environments for everyone.'
    }
  ];

function Defines() {
  return (
    <div className="defines-section">
         <h1>What Sets Us Apart</h1>
    <Container fluid>
      <Row>
        {defines.map((feature, index) => (
          <Col key={index} md={4} className={`defines-item ${index < 3 ? 'border-bottom' : ''}`}>
            <div className="defines-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default Defines