import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

const MainNavbar = () => {
  let { url } = useRouteMatch();
  return (
    <div>
      <h1>Welcome to Shows / subscription WebApp</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={`${url}/movies`}>Movies</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/subscriptions`}>Subscriptions</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/users`}>User Managment</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/logout`}>Logout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavbar;
