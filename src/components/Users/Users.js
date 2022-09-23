import React, {useEffect, useState} from 'react';

import {UserService} from "../../services";
import User from "../User/User";
import styles from './Users.module.css'

const Users = ({getUserId,setHidden}) => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{

        UserService.getAll().then(({data})=> setUsers(data))

    },[])

    return (
        <div className={styles.usersBlock}>
            {users.map(user=><User key={user.id} user={user} getUserId={getUserId} setHidden={setHidden}/>)}
        </div>
    );
};

export default Users;