import React from 'react';

import img from '../../images/625ef3905d375c038954f517_About Us Page Examples.jpeg'
import  css from './About.module.css'

const AboutComponent = () => {
    return (
        <div className={css.AboutBlock}>
            <img src={img} alt="About us"/>
        </div>
    );
};

export default AboutComponent;