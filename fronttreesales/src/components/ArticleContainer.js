import React from 'react';
import './ArticleContainer.css';

const ArticleContainer = ({ title, date, shortText, onClick }) => {
  const truncatedText = shortText.length > 300 ? shortText.substring(0, 300) + "..." : shortText;

  return (
    <div className="article-container" onClick={onClick}>
      <h3>{title}</h3>
      <p className="article-date">{new Date(date).toLocaleDateString()}</p>
      <div className="article-short-text" dangerouslySetInnerHTML={{ __html: truncatedText }} />
    </div>
  );
};

export default ArticleContainer;
