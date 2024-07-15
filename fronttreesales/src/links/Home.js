import React from 'react';
import Carousel from '../components/Carousel'; 
import VideoWithCaption from '../components/VideoOnMainPage';

const Home = () => {
  return (
    <div className="background">
      <div style={{ paddingTop: '10px' }}>
        <Carousel />
        <VideoWithCaption />
      </div>
    </div>
  );
}

export default Home;
