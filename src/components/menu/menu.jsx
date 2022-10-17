import React, { useState } from 'react';
import style from './menu.module.css'
import RoleChamp from './role-champ/role-champ';
import SearchBar from './searchbar/search-bar';

const Menu = (props) => {

    const { onSearchUp, role } = props

    return (
        <div className={style.menu}>
            <ul>
                <li>
                    <SearchBar onSearch={onSearchUp}/>
                    <RoleChamp championRole={role}/>
                </li>
            </ul>
        </div>
    );
};

export default Menu;