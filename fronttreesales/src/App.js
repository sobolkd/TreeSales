import React from 'react';
import './css/styles.css'; 
import Carousel from './components/Carousel'; 
import NavigationBar from './components/Navbar'; 
import VideoWithCaption from './components/VideoOnMainPage'; 

function App() {
  return (
    <div className="background">
      <NavigationBar />
      <div style={{ paddingTop: '80px' }}>
        <Carousel />
        <VideoWithCaption />
      </div>
    </div>
  );
}

export default App;
