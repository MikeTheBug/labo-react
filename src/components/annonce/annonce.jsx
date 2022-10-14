import React from 'react';
import style from './annonce.module.css'

const Annonce = () => {
    return (
        <div className={style.annonce}>
            <h3>CHOISISSEZ VOTRE</h3>
            <h1>CHAMPION</h1>
            <p>Avec plus de 140 champions disponibles, vous en trouverez</p>
            <p>forcément un qui vous corresponde. Maîtrisez-en un, ou</p>
            <p>maîtrisez-les tous.</p>
        </div>
    );
};

export default Annonce;