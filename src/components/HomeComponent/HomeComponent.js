import React from 'react';

import image from '../../images/Best-Website-Welcome-Message-Examples.png'

import style from './HomeComponent.module.css'

const HomeComponent = () => {

    return (
        <div className={style.homeBlock}>
            <img src={image} alt={"Welcome"}/>
        </div>
    );
};

export default HomeComponent;