import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 custom-navbar">
      <div className="top-rectangle">
        <span className="logo-text">РостиЗростай</span>
      </div>
      <div className="leaf left-leaf"></div>
      <div className="leaf left2-leaf"></div>
      <div className="leaf right-leaf"></div>
      <div className="leaf right2-leaf"></div>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/home">Головна</Nav.Link>
            <Nav.Link as={Link} to="/categories">Категорії</Nav.Link>
            <Nav.Link as={Link} to="/order">Замовлення</Nav.Link>
            <Nav.Link as={Link} to="/account">Аккаунт</Nav.Link>
            <Nav.Link as={Link} to="/contact">Зв'язок</Nav.Link>
            <Nav.Link as={Link} to="/articles">Статті</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
