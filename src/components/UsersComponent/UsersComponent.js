import React, {useEffect, useState} from 'react';

import styles from './UsersComponent.css'
import {userService} from "../../services";
import UserComponent from "../UserComponent/UserComponent";
import FormComponent from "../FormComponent/FormComponent";

const UsersComponent = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{

        userService.getAll().then(({data}) => setUsers(data));

    },[])

    return (
        <div>
            <FormComponent setUsers={setUsers}/>
            {users.length?users.map(user=><UserComponent key={user.id} user={user}/>):
                <h1>Loading....</h1>}
        </div>
    );
};

export default UsersComponent;