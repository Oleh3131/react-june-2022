import React from 'react';

const UserComponent = ({user}) => {

    const {id,first_name,last_name,email,avatar} = user;

    return (
        <div>
            <h4>id: {id}</h4>
            <h4>first name: {first_name}</h4>
            <h4>last name: {last_name}</h4>
            <h4>email: {email}</h4>
            <img src={avatar} alt="Avatar"/>
        </div>
    );
};

export default UserComponent;