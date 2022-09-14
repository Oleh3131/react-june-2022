import React from 'react';

import './User.css'

const User = ({user:{id,name,status,species,gender,image}}) => {
    return (
        <div className={'UserBlock'}>

            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>status: {status}</h2>
            <h2>species: {species}</h2>
            <h2>gender: {gender}</h2>
            <img src={image} alt={name}/>

        </div>
    );
};

export default User;