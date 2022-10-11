import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import {userService} from "../../services";


const FormComponent = () => {

    const {register, handleSubmit, reset} = useForm({mode: "all"});

    const dispatch = useDispatch();

    function submit(user) {

        userService.create({user}).then(({data}) => dispatch(userActions.createUser(data)));

        reset()

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'first name'} {...register('first_name')}/>
            <input type="text" placeholder={'last name'} {...register('last_name')}/>
            <input type="email" placeholder={'email'} {...register('email')}/>
            <button>SaveInfo</button>
        </form>
    );
};

export default FormComponent;