import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import UserComponent from "../UserComponent/UserComponent";
import style from './Users.module.css'


const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll().then(({data}) => setUsers(data))

    }, [])

    return (
        <div className={style.usersBlock}>

            <div className={style.usersBlockInfo}>
                {users.length ? users.map(user => <UserComponent key={user.id} user={user}/>) :
                    <h1>Loading...</h1>}
            </div>

            <Outlet/>
            
        </div>
    );
};

export default UsersComponent;