import React from 'react';

const TodoComponent = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div>
            <h2>userId: {userId}</h2>
            <h3>id: {id}</h3>
            <h4>title: {title}</h4>
            <h4>completed: {completed.toString()}</h4>
        </div>
    );
};

export default TodoComponent;