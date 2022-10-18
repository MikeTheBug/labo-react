import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ChampionItem from './champion-item';
import style from './champion.module.css'

const Champions = (props) => {

    const { championName, championRole } = props

    const [data, SetData] = useState([]);
    let dataFiltered = data
    if (championRole === undefined && championName !== "" && data.length > 0) {
        dataFiltered = dataFiltered.filter(el => el.name.toLowerCase().includes(championName))
    }
    if (championRole) {
        dataFiltered = dataFiltered.filter(el => el.tags.includes(championRole))
    }

    useEffect(() => {
        axios
        .get("https://ddragon.leagueoflegends.com/cdn/12.19.1/data/fr_FR/champion.json")
        .then((res) => {
            const champions = res.data.data
            const result = []
            for (const attribute in champions) {
                result.push(champions[attribute])
            }
            SetData(result)
        });

    }, []);

    return (
        <div className={style.champions}>
            <ul>
                {dataFiltered.map((champion, index) => (
                <li key={index}><ChampionItem champion={champion}/></li>
                ))}
            </ul>
        </div>
    );
};

export default Champions;