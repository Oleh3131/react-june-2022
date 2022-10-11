import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import UserComponent from "../UserComponent/UserComponent";


const UsersComponent = () => {

    const {users,loading,error} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(userActions.getAll());

    },[])

    return (
        <div>
            {loading&&<h1>Loading...</h1>}
            {error&&<h1>Error!</h1>}
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;