import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='backcon'>
      <Header />
      <div className="contact-container">
        <h2 className="contact-heading">Свяжитесь с нами</h2>
        <div className="contact-info">
          <p>Адрес: V's Apartment</p>
          <p>Телефон: +7 (962) 383-66-76</p>
          <p>Email: victor@email.com</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" name="name" aria-label="Имя" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" aria-label="Email" required />
          <label htmlFor="message">Сообщение:</label>
          <textarea id="message" name="message" aria-label="Сообщение" rows="4" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

function handleSubmit(event) {
  event.preventDefault();
  alert('Ваше сообщение было отправлено. Спасибо, что связались с нами!');
}

export default Contact;
