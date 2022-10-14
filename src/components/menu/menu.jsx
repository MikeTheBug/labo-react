import React, { useState } from 'react';
import style from './menu.module.css'
import SearchBar from './searchbar/search-bar';
import PageInitiale from './page-initiale/page-initiale';
import Assassins from './assassins/assassins';
import Combattants from './combattants/combattants';
import Mages from './mages/mages';
import Tireurs from './tireurs/tireurs';
import Supports from './supports/supports';
import Tanks from './tanks/tanks';


const Menu = (props) => {

    const { onSearchUp } = props

    return (
        <div className={style.menu}>
            <ul>
                <li>
                    <SearchBar onSearch={onSearchUp}/>
                    <PageInitiale/>
                    <Assassins/>
                    <Combattants/>
                    <Mages/>
                    <Tireurs/>
                    <Supports/>
                    <Tanks/>
                </li>
            </ul>
        </div>
    );
};

export default Menu;