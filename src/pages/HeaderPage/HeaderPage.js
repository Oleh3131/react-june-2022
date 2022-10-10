import React from 'react';
import {Outlet} from "react-router-dom";

import LayoutComponent from "../../components/LayoutComponent/LayoutComponent";
import css from './HeaderPage.module.css'

const HeaderPage = () => {
    return (
        <div className={css.HeaderBlock}>
            <LayoutComponent/>
            <div className={css.Content}>
                <h2>Content</h2>
                <Outlet/>
            </div>
        </div>
    );
};

export default HeaderPage;