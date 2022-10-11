import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";


const FormComponent = () => {

    const {register, handleSubmit, reset, setValue} = useForm({mode: "all"});

    const dispatch = useDispatch();

    function submit(user) {

        console.log(user)

        dispatch(userActions.createUser({user}));

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