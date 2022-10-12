import React from 'react';
import {useDispatch} from "react-redux";

import css from './UserComponent.module.css'
import {userActions} from "../../redux";

const UserComponent = ({user}) => {

    const {id, first_name, last_name, email, avatar} = user;

    const dispatch = useDispatch();

    return (
        <div className={css.UserBlock}>

            <div className={css.Content}>
                <h4>id: {id}</h4>
                <h4>first name: {first_name}</h4>
                <h4>last name: {last_name}</h4>
                <h4>email: {email}</h4>
                <img src={avatar} alt="Avatar"/>
            </div>


            <div className={css.Buttons}>
                <button onClick={() => dispatch(userActions.userToUpdate({user}))}>Update user
                </button>
                <button onClick={() => dispatch(userActions.deleteUser({id}))}>Delete user</button>
            </div>

        </div>
    );
};

export default UserComponent;