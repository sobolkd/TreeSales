import React, { useState } from 'react';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowRegistrationForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowRegistrationForm(false);
  };

  const handleShowRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  const handleHideRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  return (
    <div className="account-container">
      {!isLoggedIn && (
        <button onClick={handleLogin}>Авторизований</button>
      )}
      {!isLoggedIn && (
        <button onClick={handleShowRegistrationForm}>Не авторизований</button>
      )}
      {isLoggedIn && (
        <div>
          <p>Ви авторизовані. Тут може бути текст Lorem Ipsum або інша інформація.</p>
          <button onClick={handleLogout}>Вийти</button>
        </div>
      )}
      {showRegistrationForm && (
        <div>
          <h2>Форма реєстрації</h2>
          {/* Додайте тут форму реєстрації */}
          <button onClick={handleHideRegistrationForm}>Сховати форму</button>
        </div>
      )}
    </div>
  );
};

export default Account;
