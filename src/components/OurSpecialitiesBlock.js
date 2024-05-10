import React from 'react';
import '../styles/OurSpecialitiesBlock.css';

const OurSpecialitiesBlock = () => {
  return (
    <div className="specialities-container">
      <h2 className="specialities-title">Наши специализации</h2>
      <hr className="specialities-divider" />
      <div className="specialities-content">
        <p className="specialities-text">
        Имплантация киберпротезов, кибернетическая хирургия, программирование нейроинтерфейсов и многое другое.
        </p>
      </div>
    </div>
  );
};

export default OurSpecialitiesBlock;