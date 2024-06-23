import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../components/Navbar.css'; 

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 custom-navbar">
      <Container>
        <Navbar.Brand href="#home">РостиЗростай</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
