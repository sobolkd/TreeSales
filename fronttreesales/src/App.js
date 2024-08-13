import React from 'react';
import './css/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './links/Home';
import Contact from './links/Contact';
import Account from './links/Account'; 
import Articles from './links/Articles';
import CreateArticle from './components/CreateArticle';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} /> 
          <Route path="/articles" element={<Articles />} />
          <Route path="/create-article" element={<CreateArticle />} />
          {/* Додайте інші маршрути тут */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
