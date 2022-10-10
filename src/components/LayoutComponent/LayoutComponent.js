import React from 'react';
import {Link} from "react-router-dom";

import css from './LayoutComponent.module.css'

const LayoutComponent = () => {
    return (
        <div className={css.Menu}>
           <h2>Menu:</h2>
            <ul className={css.UlBlock}>
                <li><Link to={'home'}>Home</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
                <li><Link to={'about'}>About</Link></li>
            </ul>
        </div>
    );
};

export default LayoutComponent;