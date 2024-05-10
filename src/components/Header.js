import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src="/assets/logo.svg" alt="Логотип" className="logo" />
          <li className="site-title"><Link to="/" className="nav-link"> Помощи.net </Link></li>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Главная</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Услуги</Link></li>
            <li className="nav-item"><Link to="/doctors" className="nav-link">Врачи</Link></li>
            <li className="nav-item"><Link to="/news" className="nav-link">Новости</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;