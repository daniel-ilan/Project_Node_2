import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';

const Main = () => {
  console.log('rendered Main');
  return (
    <div>
      <MainNavbar />
    </div>
  );
};

export default Main;
