import React, { useState } from 'react';
import axios from 'axios';
import './CreateArticle.css';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [fullText, setFullText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const shortText = fullText.substring(0, 100);
    try {
      await axios.post('http://localhost:7087/api/articles', {
        title,
        date: new Date().toISOString(),
        shorttext: shortText,
        fulltext: fullText,
      });
      alert('Стаття успішно додана');
      setTitle('');
      setFullText('');
    } catch (error) {
      console.error('Помилка при додаванні статті:', error);
      alert('Не вдалося додати статтю');
    }
  };

  const handleCancel = () => {
    setTitle('');
    setFullText('');
  };

  return (
    <div className="create-article-container">
      <div className="button-group">
        <button type="button" onClick={handleCancel}>Скасувати</button>
        <button type="submit" form="create-form">Відправити</button>
      </div>
      <h2>Створити нову статтю</h2>
      <form id="create-form" onSubmit={handleSubmit}>
        <div>
          <label>Заголовок:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Повний текст:</label>
          <textarea
            value={fullText}
            onChange={(e) => setFullText(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
