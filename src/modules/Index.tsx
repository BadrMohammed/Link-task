import React from 'react';
import { HomeController } from './Home/HomeController';
import { NewsController } from './News/NewsController';
import { ThingsWeDoController } from './ThingsWeDo/ThingsWeDoController';

export const Index = () => {
  return (
    <React.Fragment>
      <HomeController />
      <ThingsWeDoController />
      <NewsController />
    </React.Fragment>
  );
};
