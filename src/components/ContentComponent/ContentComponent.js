import React from 'react';
import {Link, Outlet} from "react-router-dom";

import style from './ContentComponent.module.css'

const ContentComponent = () => {
    return (
        <div className={style.contentMenu}>
            <ul className={style.content}>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>

            <Outlet/>

        </div>
    );
};

export default ContentComponent;