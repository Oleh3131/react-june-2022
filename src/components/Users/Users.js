import React, {useEffect, useState} from 'react';

import './Users.css'
import User from "../User/User";

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
            .then(value => value.json())
            .then(value => setUsers(value));

    }, [])

    return (
        <div className={'UsersBlock'}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;