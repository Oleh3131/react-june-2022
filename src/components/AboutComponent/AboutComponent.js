import React from 'react';

import style from "./AboutComponent.module.css";
import image from "../../images/360_F_325938426_lE6Cy6sS45ijm4PiIgF1bz5mkTkbNeVy.jpg";

const AboutComponent = () => {
    return (
        <div className={style.aboutBlock}>
            <img src={image} alt={"Welcome"}/>
        </div>
    );
};

export default AboutComponent;