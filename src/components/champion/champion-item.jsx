import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './champion-item.module.css'

const ChampionItem = ({ champion }) => {


    return (
        <NavLink to={champion.id}>
            <div className={style.portrait}>
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={"portrait de " + champion.name}/>
                <h2>{champion.name}</h2>
            </div>
        </NavLink>
    );
};

export default ChampionItem;