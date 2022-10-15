import React, {FC, ReactNode} from 'react';

import {IUser} from "../../interfaces";

interface IProps{
    user:IUser,
    children?:ReactNode
}


const User:FC<IProps> = ({user}) => {

    let {id,first_name,last_name,email,avatar} = user;

    return (
        <div>
            <h2>id: {id}</h2>
            <h2>first name: {first_name}</h2>
            <h2>last name: {last_name}</h2>
            <h2>email: {email}</h2>
            <img src={avatar} alt="Avatar"/>
        </div>
    );
};

export default User;