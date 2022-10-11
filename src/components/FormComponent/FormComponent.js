import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";
import {userService} from "../../services";
import firstImg from '../../images/11.jpg'
import secondImg from '../../images/22.jpg'
import thirdImg from '../../images/33.jpg'


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
            {/*<select>*/}
            {/*    <option value={firstImg} {...register('avatar')}>1</option>*/}
            {/*    <option value={secondImg} {...register('avatar')}>2</option>*/}
            {/*    <option value={thirdImg} {...register('avatar')}>3</option>*/}
            {/*</select>*/}
            <select>
                <option value={firstImg} {...register('avatar')}>1</option>
                <option value={secondImg} {...register('avatar')}>2</option>
                <option value={thirdImg} {...register('avatar')}>3</option>
            </select>
            <button>SaveInfo</button>
        </form>
    );
};

export default FormComponent;