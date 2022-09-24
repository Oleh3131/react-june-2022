import React from 'react';

import styles from './UserComponent.css'

const UserComponent = ({user}) => {

    const {id, name, username, email, phone, website} = user;
    
    return (
        <div>
            <h2>id: {id}</h2>
            <h3>name: {name}</h3>
            <h3>username: {username}</h3>
            <h4>email: {email}</h4>
            <h4>phone: {phone}</h4>
            <h4>website: {website}</h4>
        </div>
    );
};

export default UserComponent;