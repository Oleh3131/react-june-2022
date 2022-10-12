import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {userService} from "../../services";
import firstImg from '../../images/11.jpg'


const FormComponent = () => {

    const {register, handleSubmit, reset,setValue} = useForm({mode: "all"});

    const dispatch = useDispatch();

    const {oneUser} = useSelector(state => state.userReducer);

    function submit(user) {

        if(oneUser){

            dispatch(userActions.updateUserById({id:oneUser.id, user: user}))


        }else {

            userService.create({user}).then(({data}) => dispatch(userActions.createUser(data)));

        }


        reset()

    }

    useEffect(()=>{

        if (oneUser) {
            setValue('first_name',oneUser.first_name)
            setValue('last_name',oneUser.last_name)
            setValue('email',oneUser.email)
            setValue('avatar',oneUser.avatar)
        }

    },[oneUser,setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'first name'} {...register('first_name')}/>
            <input type="text" placeholder={'last name'} {...register('last_name')}/>
            <input type="email" placeholder={'email'} {...register('email')}/>
            <select>
                <option value={firstImg} {...register('avatar')}>1</option>
            </select>
            <button>{oneUser? "Update":"Save info"}</button>
        </form>
    );
};

export default FormComponent;
