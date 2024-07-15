import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const NavigationBar = () => {
  useEffect(() => {
    let leafCount = 0;
    const maxLeaves = 2;

    const createLeaf = () => {
      if (leafCount >= maxLeaves) return;

      const leaf = document.createElement('div');
      leaf.className = 'leaf';

      const randomPosition = Math.random();
      if (randomPosition < 0.33) {
        leaf.style.top = '-20px';
        leaf.style.left = `${Math.random() * 100}%`;
      } else if (randomPosition < 0.66) {
        leaf.style.left = '-20px';
        leaf.style.top = `${Math.random() * 100}%`;
      } else {
        leaf.style.right = '-20px';
        leaf.style.top = `${Math.random() * 100}%`;
      }

      const duration = Math.random() * 5 + 5;
      leaf.style.animationDuration = `${duration}s`;

      const direction = Math.random() < 0.5 ? -1 : 1;
      leaf.style.animationDirection = direction === -1 ? 'reverse' : 'normal';

      const rotation = Math.random() * 360 + 180;
      leaf.style.transform = `rotate(${rotation}deg)`;

      document.querySelector('.custom-navbar').appendChild(leaf);

      setTimeout(() => {
        leaf.classList.add('fade-out');
      }, 100);

      leaf.addEventListener('animationend', () => {
        leaf.remove();
        leafCount--;
      });
      leafCount++;
    };

    const leafInterval = setInterval(createLeaf, 500);

    return () => clearInterval(leafInterval);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/home">РостиЗростай</Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/home">Головна</Nav.Link>
            <Nav.Link as={Link} to="/categories">Категорії</Nav.Link>
            <Nav.Link as={Link} to="/order">Замовлення</Nav.Link>
            <Nav.Link as={Link} to="/account">Аккаунт</Nav.Link>
            <Nav.Link as={Link} to="/contact">Зв'язок</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
