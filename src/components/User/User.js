import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {

    const {id,name,surname,email} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <h2>id:{id}</h2>
            <h4>name:{name}</h4>
            <h4>surname:{surname}</h4>
            <h4>email:{email}</h4>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>Show details</button>
        </div>
    );
};

export default User;