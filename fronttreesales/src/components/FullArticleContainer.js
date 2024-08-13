import React from 'react';
import './FullArticleContainer.css';

const FullArticleContainer = ({ title, date, fullText, onBack }) => {
  return (
    <div className='page-container'>
      <div className='full-article-container'>
        <div className='article-header'>
          <h2>{title}</h2>
          <button className='back-button' onClick={onBack}>Назад</button>
        </div>
        <p className="article-date">{formatDate(date)}</p>
        <div className="fulltext-container" dangerouslySetInnerHTML={{ __html: fullText }} />
      </div>
    </div>
  );
}

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('uk-UA', options);
};

export default FullArticleContainer;
