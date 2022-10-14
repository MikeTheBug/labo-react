import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ChampionItem from './champion-item';
import style from './champion.module.css'

const Champions = () => {

    const [data, SetData] = useState([]);

    useEffect(() => {
        axios
        .get("https://ddragon.leagueoflegends.com/cdn/12.19.1/data/fr_FR/champion.json")
        .then((res) => {
            const champions = res.data.data
            const result = []
            for (const attribute in champions) {
                console.log(champions[attribute])
                result.push(champions[attribute])
            }
            SetData(result)
        });

    }, []);

    return (
        <div className={style.champions}>
            <ul>
                {data.map((champion, index) => (
                <ChampionItem key={index} champion={champion}/>
                ))}
            </ul>
        </div>
    );
};

export default Champions;