import React from 'react';

import style from './HomeComponent.module.css'
import image from '../../image/Welcome.jpg'

const HomeComponent = () => {
    return (
        <div className={style.homeBlock}>
            <img src={image} alt={"Welcome"}/>
        </div>
    );
};

export default HomeComponent;