import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav-bar.module.css'

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <ul>
        <NavLink to="/" className={style.navi}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/objets" className={style.navi}>
          <li>Objets</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;