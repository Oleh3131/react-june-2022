import React from 'react';
import {useForm} from "react-hook-form";


import style from './FormComponent.module.css'
import {userService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {joiValidator} from "../validators";


const FormComponent = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode:"all",
        resolver:joiResolver(joiValidator)
    });

    function submit (user){

        userService.create(user).then(({data}) => setUsers(users => [...users, data]));

        reset();
    }


      // ------АБО-------------------------------------------------------------
    //
    // let submit = async (user)=> {
    //
    //     const axiosResponse = await userService.create(user);
    //
    //     setUsers(users => [...users, axiosResponse.data]);
    //
    //     reset();
    // }
    //
    // -----------АБО-------------------------------------------------------------


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <input type="text" placeholder={'website'} {...register('website')}/>
            {errors.website && <span>{errors.website.message}</span>}
            <button>Save info</button>
        </form>
    );
};

export default FormComponent;