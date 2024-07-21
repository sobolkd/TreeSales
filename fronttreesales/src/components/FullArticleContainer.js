// src/components/FullArticleContainer.js
import React from 'react';
import './FullArticleContainer.css';

const FullArticleContainer = ({ title, date, fullText, onBack }) => {
  return (
    <div className='full-article-container'>
      <div className='article-header'>
        <h2>{title}</h2>
        <span>{date}</span>
      </div>
      <p>{fullText}</p>
      <button className='back-button' onClick={onBack}>Назад</button>
    </div>
  );
}

export default FullArticleContainer;
