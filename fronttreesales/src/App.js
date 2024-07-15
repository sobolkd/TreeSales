import React from 'react';
import './css/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './links/Home';
import Contact from './links/Contact';
import Account from './links/Account'; 

function App() {
  return (
    <Router>
      <NavigationBar />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} /> {/* Додайте маршрут для Account */}
          {/* Додайте інші маршрути тут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
