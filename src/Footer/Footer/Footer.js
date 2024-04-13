import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Import your custom CSS for the footer

const Footer = () => {
  return (
    <footer className="bg-light text-dark">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <a href="https://www.facebook.com"><FaFacebook className="social-icon" /></a>
            <a href="https://www.twitter.com"><FaTwitter className="social-icon" /></a>
            <a href="https://www.instagram.com"><FaInstagram className="social-icon" /></a>
            <a href="https://www.linkedin.com"><FaLinkedin className="social-icon" /></a>
            <a href="https://www.github.com"><FaGithub className="social-icon" /></a>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
