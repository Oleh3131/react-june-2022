import React, {useEffect, useState} from 'react';

import './Users.css'
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value));

    }, []);

    return (
        <div className={'UsersBlock'}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;