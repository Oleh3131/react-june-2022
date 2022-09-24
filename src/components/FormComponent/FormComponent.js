import React from 'react';
import {useForm} from "react-hook-form";


import {commentService} from "../../services";

const FormComponent = ({setComments}) => {


    const {register,handleSubmit,formState:{errors,isValid},reset} = useForm({mode:'all'});

    function submit(comment) {

        commentService.create(comment).then(({data})=>setComments(comments=>[...comments,data]))

        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('postId',{valueAsNumber:true})} placeholder={'postId'}/>
            {errors.postId && <span>{errors.postId.message}</span>}
            <input type="text" {...register('name')} placeholder={'name'}/>
            <input type="text" {...register('email')} placeholder={'email'}/>
            <input type="text" {...register('body')} placeholder={'body'}/>
            <button disabled={!isValid}>Save info</button>
        </form>
    );
};

export default FormComponent;