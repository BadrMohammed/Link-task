import React from 'react';
import { HomeController } from './Home/HomeController';
import { NewsController } from './News/NewsController';

export const Index = () => {
  return (
    <React.Fragment>
      <HomeController/>
      <NewsController />
    </React.Fragment>
  );
};
