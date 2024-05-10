import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WelcomeBlock from './WelcomeBlock';
import Slider from './Slider';
import OurSpecialitiesBlock from './OurSpecialitiesBlock';
import ServicesBlock from './ServicesBlock';
import HealthPackagesBlock from './HealthPackagesBlock';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className='home'> 
      <Header />
      <Slider  /> 
      <WelcomeBlock  /> 
      <OurSpecialitiesBlock /> 
      <ServicesBlock />
      <HealthPackagesBlock /> 
      <Footer />
    </div>
  );
};

export default Home;