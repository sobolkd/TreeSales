// src/pages/Articles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Articles.css';
import ArticleContainer from '../components/ArticleContainer';
import FullArticleContainer from '../components/FullArticleContainer';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:7087/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return (
      <FullArticleContainer
        title={selectedArticle.title}
        date={selectedArticle.date}
        fullText={selectedArticle.fulltext}
        onBack={handleBackClick}
      />
    );
  }

  return (
    <div>
      <p className='textmain'>
        Тут ви знайдете різноманітні статті, присвячені добривам, вирощуванню рослин 
        та догляду за ними. Ми розглядаємо найкращі практики використання добрив для забезпечення здорового росту рослин,
        ділимося порадами щодо вибору та застосування різних типів добрив. Також ми надаємо корисну інформацію про вирощування 
        різних видів рослин, включаючи рекомендації щодо посадки, поливу, освітлення та інших важливих аспектів догляду.
      </p>
      {articles.map((article, index) => (
        <ArticleContainer 
          key={index}
          title={article.title} 
          date={article.date} 
          shortText={article.shorttext} 
          onClick={() => handleArticleClick(article)}
        />
      ))}
    </div>
  );
}

export default Articles;
