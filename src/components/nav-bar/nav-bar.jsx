import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav-bar.module.css'

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <ul>
        <NavLink to="/">
          <li  className={style.navi}>Home</li>
        </NavLink>
        <NavLink to="/objects">
          <li className={style.navi}>Objects</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;