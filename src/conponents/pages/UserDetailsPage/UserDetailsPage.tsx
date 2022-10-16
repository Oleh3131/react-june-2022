import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import { useAppLocation} from "../../../hooks";
import {IUser} from "../../../interfaces";
import {userService} from "../../../services";



const UserDetailsPage:FC = () => {

    const {id} = useParams<{id:string}>();

    const {state} = useAppLocation<IUser>();

    const [user,setUser] = useState<IUser | null>(null);

useEffect(()=>{

    if (state) {
        setUser(state)
    }else{
        // ! Означає що ми впевнені що в параметру id щось э ы ми беремо на себе всю выдповыдальнысть
        userService.getById(+id!).then(({data}) => setUser(data));
    }

},[id,state])

    return (
        <div>
            {user&&(
                <div>
                    <h2>id: {user.id}</h2>
                    <h2>first name: {user.first_name}</h2>
                    <h2>last name: {user.last_name}</h2>
                    <h2>email: {user.email}</h2>
                    <img src={user.avatar} alt="Avatar"/>
                </div>
            )}
        </div>
    );
};

export default UserDetailsPage;