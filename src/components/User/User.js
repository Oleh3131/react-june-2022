import React from 'react';

import './User.css'

const User = ({user:{name,surname,age,info}}) => {

    return (
        <div className={'UserBlock'}>
            <h2>name: {name}</h2>
            <h2>surname: {surname}</h2>
            <h3>age: {age}</h3>
            <p>info: {info}</p>
        </div>
    );
};

export default User;