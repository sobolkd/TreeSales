import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Articles.css';
import ArticleContainer from '../components/ArticleContainer';
import FullArticleContainer from '../components/FullArticleContainer';
import EditArticle from '../components/EditArticle';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isCreatingArticle, setIsCreatingArticle] = useState(false);
  const [isEditingArticle, setIsEditingArticle] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [title, setTitle] = useState('');
  const [currentArticleId, setCurrentArticleId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const containerRef = useRef(null);
  const lastArticleRef = useRef(null);

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

  useEffect(() => {
    if (lastArticleRef.current) {
      lastArticleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [articles]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
    setIsCreatingArticle(false);
    setIsEditingArticle(false);
  };

  const handleEditClick = (articleId) => {
    setCurrentArticleId(articleId);
    setIsEditingArticle(true);
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSaveArticle = async () => {
    if (!title.trim() || !editorContent.trim()) {
      setErrorMessage('Будь ласка, заповніть всі поля.');
      return;
    }

    try {
      const newArticle = {
        title,
        date: new Date().toISOString(),
        fulltext: editorContent,
        shorttext: editorContent.substring(0, 300),
      };
      await axios.post('http://localhost:7087/api/articles', newArticle);
      setIsCreatingArticle(false);
      setErrorMessage('');
      const response = await axios.get('http://localhost:7087/api/articles');
      setArticles(response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}],
      [{ 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'align', 'link', 'image'
  ];

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

  if (isCreatingArticle) {
    return (
      <div className="editor-container">
        <div className="editor-form">
          <label className="editor-label">Заголовок:</label>
          <input 
            type="text" 
            value={title} 
            onChange={handleTitleChange} 
            placeholder="Введіть заголовок!" 
            className="editor-title-input"
            required
          />
        </div>
        
        <div className="editor-form">
          <label className="editor-label">Повний текст:</label>
          <ReactQuill 
            value={editorContent} 
            onChange={handleEditorChange} 
            modules={modules}
            formats={formats}
            className="editor-textarea"
          />
        </div>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <div className="button-group">
          <button onClick={handleSaveArticle} className="editor-button">Зберегти статтю</button>
          <button onClick={handleBackClick} className="editor-button">Назад</button>
        </div>
      </div>
    );
  }

  if (isEditingArticle) {
    return (
      <EditArticle
        articleId={currentArticleId}
        onCancel={handleBackClick}
      />
    );
  }

  return (
    <div className="articles-container">
      <div className="text-and-button">
        <p className='textmain'>
          Тут ви знайдете різноманітні статті, присвячені добривам, вирощуванню рослин 
          та догляду за ними. Ми розглядаємо найкращі практики використання добрив для забезпечення здорового росту рослин,
          ділимося порадами щодо вибору та застосування різних типів добрив. Також ми надаємо корисну інформацію про вирощування 
          різних видів рослин, включаючи рекомендації щодо посадки, поливу, освітлення та інших важливих аспектів догляду.
        </p>
        <button className="create-article-button" onClick={() => setIsCreatingArticle(true)}>
          Створити статтю
        </button>
        <button className="create-article-button" onClick={() => setIsEditingArticle(true)}>
          Редагувати статтю
        </button>
      </div>

      {articles.length === 0 && (
        <p className="textmain">Тут поки що пусто</p>
      )}

      <div className="articles-wrapper" ref={containerRef}>
        {articles.map((article, index) => (
          <ArticleContainer 
            key={index}
            title={article.title} 
            date={article.date} 
            shortText={article.shorttext} 
            onClick={() => handleArticleClick(article)}
            onEdit={() => handleEditClick(article.id)}
            ref={index === articles.length - 1 ? lastArticleRef : null}
          />
        ))}
      </div>
    </div>
  );
}

export default Articles;
