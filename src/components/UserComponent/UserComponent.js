import React from 'react';
import {useNavigate} from "react-router-dom";

import style from './UserComponent.module.css'

const UserComponent = ({user}) => {

    const {id,name,username,email} = user;

    const navigatator = useNavigate();
    
    return (
        <div className={style.userBlock}>
           <h2>id: {id}</h2>
           <h4>name: {name}</h4>
           <h4>username: {username}</h4>
           <h4>email: {email}</h4>
            <button onClick={()=> navigatator(id.toString())}>User details</button>
        </div>
    );
};

export default UserComponent;