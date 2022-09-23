import React from 'react';
import {useForm} from "react-hook-form";

import style from './FormComponent.module.css'


const FormComponent = () => {

    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm();

    function submit(user) {

        console.log(user);

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'phone'} {...register('phone',{valueAsNumber:true})}/>
            <input type="text" placeholder={'website'} {...register('website')}/>
            <button>Save info</button>
        </form>
    );
};

export default FormComponent;