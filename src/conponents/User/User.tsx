import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IUser} from "../../interfaces";


interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {

    const {id, first_name, last_name, email, avatar} = user;

    const navigate = useNavigate();

    return (
        <div>
            <h2>id: {id}</h2>
            <h2>first name: {first_name}</h2>
            <h2>last name: {last_name}</h2>
            <h2>email: {email}</h2>
            <img src={avatar} alt="Avatar"/>
            <button onClick={()=>navigate(`${id}`,{state:user})}>Show details</button>
        </div>
    );
};

export default User;