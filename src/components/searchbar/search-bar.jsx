import React from 'react';
import style from './search-bar.module.css'

const SearchBar = () => {
    return (
        <div>
            <ul>
                <input type="text" className={style.input}/>
            </ul>
        </div>
    );
};

export default SearchBar;