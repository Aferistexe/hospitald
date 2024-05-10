import React from 'react';
import { FaAmbulance, FaEye, FaBrain, FaHospital, FaUserMd, FaMicroscope } from 'react-icons/fa'; 
import '../styles/ServicesBlock.css'; 

const ServicesBlock = () => {
  return (
    <div className="services-container">
      <div className="service-item">
        <FaAmbulance className="logo" /> 
        <div className="text">
          <h3>Круглосуточная поддержка скорой помощи</h3>
          <p>Круглосуточная поддержка скорой помощи гарантирует быстрое реагирование на любую медицинскую ситуацию в любое время суток.</p>
        </div>
      </div>
      <div className="service-item">
        <FaEye className="logo" />
        <div className="text">
          <h3>Киберимплантация 2.0</h3>
          <p>Революционная технология для улучшения человеческих возможностей.</p>
        </div>
      </div>
      <div className="service-item">
        <FaBrain className="logo" /> 
        <div className="text">
          <h3>Улучшение мозговых функций с помощью киберимплантов</h3>
          <p>Киберимпланты для мозга - это передовые медицинские устройства, разработанные для оптимизации и улучшения функций человеческого мозга.</p>
        </div>
      </div>
      <div className="service-item">
        <FaHospital className="logo" />
        <div className="text">
          <h3>У нас 20 современных операционных залов</h3>
          <p>Наши операционные залы обеспечивают комфорт и безопасность как для пациентов, так и для медицинского персонала.</p>
        </div>
      </div>
      <div className="service-item">
        <FaUserMd className="logo" />
        <div className="text">
          <h3>Центр замены суставов</h3>
          <p>Проведения операций по замене суставов с использованием передовых имплантатов. Наша команда опытных хирургов и медицинских специалистов обеспечивает высококачественное лечение и реабилитацию пациентов с заболеваниями суставов.</p>
        </div>
      </div>
      <div className="service-item">
        <FaMicroscope className="logo" />
        <div className="text">
          <h3>Центр киберимплантации</h3>
          <p>Где технология встречает человеческий организм.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;