import React from 'react';

import img from '../../images/Welcome.png'
import css from './HomeComponent.module.css'

const HomeComponent = () => {

    return (
        <div className={css.HomeBlock}>
            <img src={img} alt="Welcome"/>
        </div>
    );
};

export default HomeComponent;