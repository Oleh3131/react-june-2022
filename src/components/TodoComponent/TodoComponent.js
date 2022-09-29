import React from 'react';

import style from './TodoComponent.module.css'

const TodoComponent = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div className={style.todoBlock}>
            <h2>userId: {userId}</h2>
            <h3>id: {id}</h3>
            <h4>title: {title}</h4>
            <h4>completed: {completed.toString()}</h4>
        </div>
    );
};

export default TodoComponent;