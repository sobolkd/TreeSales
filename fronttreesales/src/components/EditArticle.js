import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateArticle.css';

const EditArticle = ({ onCancel }) => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [title, setTitle] = useState('');
  const [fullText, setFullText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:7087/api/updatearticle');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setErrorMessage('Не вдалося завантажити статті');
      }
    };

    fetchArticles();
  }, []);

  const handleArticleSelect = async (articleId) => {
    try {
      const response = await axios.get(`http://localhost:7087/api/updatearticle/${articleId}`);
      const article = response.data;
      setSelectedArticle(article);
      setTitle(article.title);
      setFullText(article.fulltext);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching article:', error);
      setErrorMessage('Не вдалося завантажити статтю');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const shortText = fullText.substring(0, 100);
    try {
      await axios.put(`http://localhost:7087/api/updatearticle/${selectedArticle.id}`, {
        title,
        shorttext: shortText,
        fulltext: fullText,
        date: new Date().toISOString(),
      });
      alert('Стаття успішно оновлена');
      onCancel();
      window.location.reload();
    } catch (error) {
      console.error('Помилка при оновленні статті:', error);
      setErrorMessage('Не вдалося оновити статтю');
    }
  };

  const handleDelete = async () => {
    if (!selectedArticle) return;

    const isConfirmed = window.confirm('Ви впевнені, що хочете видалити цю статтю?');
    if (!isConfirmed) return;

    try {
      await axios.delete(`http://localhost:7087/api/updatearticle/${selectedArticle.id}`);
      alert('Стаття успішно видалена');
      setSelectedArticle(null);
      setTitle('');
      setFullText('');
      onCancel();
      window.location.reload();
    } catch (error) {
      console.error('Помилка при видаленні статті:', error);
      setErrorMessage('Не вдалося видалити статтю');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleEditorChange = (content) => {
    setFullText(content);
    if (errorMessage) {
      setErrorMessage('');
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

  if (!selectedArticle) {
    return (
      <div className="edit-article-background">
        <div className="edit-article-container">
          <div className="button-group">
            <button type="button" onClick={onCancel}>Скасувати</button>
          </div>
          <h2>Редагувати статтю</h2>
          <div className="article-select">
            <label>Виберіть статтю для редагування:</label>
            <select onChange={(e) => handleArticleSelect(e.target.value)} defaultValue="">
              <option value="" disabled>Оберіть статтю</option>
              {articles.map((article) => (
                <option key={article.id} value={article.id}>
                  {article.title}
                </option>
              ))}
            </select>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="edit-article-background">
      <div className="create-article-container">
        <div className="button-group">
          <button type="submit" form="edit-form">Оновити</button>
          <button type="button" onClick={handleDelete}>Видалити</button>
          <button type="button" onClick={onCancel}>Скасувати</button>
        </div>
        <h2>Редагувати статтю</h2>
        <form id="edit-form" onSubmit={handleSubmit}>
          <div>
            <label>Заголовок:</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label>Повний текст:</label>
            <ReactQuill
              value={fullText}
              onChange={handleEditorChange}
              modules={modules}
              formats={formats}
              style={{ color: 'black' }}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default EditArticle;
