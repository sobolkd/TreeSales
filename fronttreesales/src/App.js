import React from 'react';
import './css/styles.css'; 
import Carousel from './components/Carousel'; 
import NavigationBar from './components/Navbar'; 

function App() {
  return (
    <div className="background">
      <NavigationBar />
      <div style={{ paddingTop: '20px' }}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
