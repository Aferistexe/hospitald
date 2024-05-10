import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/assets/logo.svg" alt="Логотип" className="footer-logo" />
        <div className="footer-column">
          <h4>Контакты</h4>
          <p>Адрес: V's Apartment</p>
          <p>Телефон: +7 (962) 383-66-76</p>
          <p>Email: victor@email.com</p>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/doctors">Врачи</a></li>
            <li><a href="/news">Новости</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Подписка на рассылку</h4>
          <form>
            <input type="email" placeholder="Введите ваш email" />
            <button type="submit">Подписаться</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Помощи.net. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
