// src/components/ArticleContainer.js
import React from 'react';
import './ArticleContainer.css';

const ArticleContainer = ({ title, date, shortText, onClick }) => {
  return (
    <div className='article-container' onClick={onClick}>
      <div className='article-header'>
        <h2>{title}</h2>
        <span>{date}</span>
      </div>
      <p>{shortText}</p>
    </div>
  );
}

export default ArticleContainer;
