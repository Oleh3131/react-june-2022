import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUser} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../redux";
import img from '../../images/professions-and-jobs-icon-avatar-icon-programmer-icon-zfUHBaSA.jpg'

const UserForm:FC = () => {

    const {register,handleSubmit,reset} = useForm<IUser>();

    const dispatch = useAppDispatch();

    const submit:SubmitHandler<IUser>=async (data)=>{

        await dispatch(userActions.create({user: data}));

        reset();

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'first name'} {...register('first_name')}/>
            <input type="text" placeholder={'last name'} {...register('last_name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <select>
                <option value={img} {...register('avatar')}>1</option>
            </select>
            <button>Save</button>
        </form>
    );
};

export default UserForm;