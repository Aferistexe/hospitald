import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/News.css';

const News = () => {
  return (
    <div className='backnew'>
      <Header />
      <div className="news-container">
        <h2 className="news-heading">Новости</h2>
        <div className="news-item">
          <h3 className="news-title">Успешная операция по установке нейроинтерфейса в мозг пациента</h3>
          <p className="news-date">10 марта 2024</p>
          <p className="news-description">Ведущие хирурги и биоинженеры вместе провели революционную операцию по установке нейроинтерфейса в мозг пациента. Этот важный шаг в области киберимплантации открывает новые перспективы в лечении неврологических заболеваний и восстановлении функций нервной системы.</p>
        </div>
        <div className="news-item">
          <h3 className="news-title">Прорыв в разработке бионических конечностей</h3>
          <p className="news-date">15 марта 2024</p>
          <p className="news-description">Команда исследователей представила новый прототип бионической конечности, которая обладает уникальной гибкостью и точностью движений. Этот прорывный протез сможет помочь миллионам людей по всему миру, лишившихся конечностей, вернуться к полноценной жизни.</p>
        </div>
        <div className="news-item">
          <h3 className="news-title">Первая успешная прививка киберимплантов</h3>
          <p className="news-date">20 марта 2024</p>
          <p className="news-description">Ученые объявили о первом успешном применении киберимплантов для создания нового поколения вакцин. Это значимое достижение может стать ключевым шагом в борьбе с различными инфекционными заболеваниями и улучшении иммунной системы человека.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
