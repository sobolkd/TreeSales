import React from 'react';
import './VideoOnMainPage.css';
import videoSrc from '../Images/Bartik.mp4';

const VideoWithCaption = () => {
  return (
    <div className="video-container">
      <div className="pulse-circle"></div>
      <div className="pulse-circle"></div>
      <p className="caption">Це місце для відео з наших теплиць, виробництва, але поки що милуємось Бартіком </p>
      <video className="video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoWithCaption;
