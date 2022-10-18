import React, { useState } from 'react';
import style from './search-bar.module.css'

const SearchBar = (props) => {

    const { onSearch } = props

    const [championName, setChampionName] = useState("")

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            onSearch(championName)
        }
    }

    return (
        <div className={style.search}>
            <img src='./loupe.png'/>
            <p>
                <input type="text" value={championName} onChange={e => setChampionName(e.target.value)} onKeyUp={handleEnter}/>
            </p>
        </div>
    );
};

export default SearchBar