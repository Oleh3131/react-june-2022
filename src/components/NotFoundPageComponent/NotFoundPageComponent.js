import React from 'react';

import css from './NotFoundPageComponent.module.css'

const NotFoundPageComponent = () => {
    return (
        <div className={css.NotFoundBlock}>
            <h3>Ooops!</h3>
            <h1>404</h1>
            <h3>Page not found!!!</h3>
        </div>
    );
};

export default NotFoundPageComponent;