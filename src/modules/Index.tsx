import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { HomeController } from './Home/HomeController';
import { NewsController } from './News/NewsController';
import { ThingsWeDoController } from './ThingsWeDo/ThingsWeDoController';

export const Index = () => {
  return (
    <React.Fragment>
      <HomeController />
      <ThingsWeDoController />
      <NewsController />
      <Footer/>
    </React.Fragment>
  );
};
