import React from 'react';
import '../links/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="social-links">
        <span className="text-animation"><a href="mailto:rostyzrostay@example.com">Електронна пошта</a></span>
        <span className="text-animation"><a href="https://www.instagram.com/nik_arno/">Instagram</a></span>
        <span className="text-animation"><a href="https://www.facebook.com/beregcpo">Facebook</a></span>
        <span className="text-animation"><a href="https://t.me/s/ssternenko">Telegram</a></span>
        <p className='contact-text'>Ми завжди готові вам допомогти. Напишіть нам у зручний вам спосіб і ми вирішимо ваше питання!</p>
      </div>
    </div>
  );
}

export default Contact;
