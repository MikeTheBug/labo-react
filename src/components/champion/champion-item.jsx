import React from 'react';
import style from './champion-item.module.css'

const ChampionItem = ({ champion }) => {


    return (
        <li className={style.portrait}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={"portrait de " + champion.name}/>
            <h2>{champion.name}</h2>
        </li>
    );
};

export default ChampionItem;