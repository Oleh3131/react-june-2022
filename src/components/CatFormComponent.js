import React from 'react';
import {useForm} from "react-hook-form";


const CatFormComponent = ({dispatch}) => {


    const {register, handleSubmit, reset} = useForm({mode: "all"});


    function submit({catName}) {

        dispatch({type:'catName',payload:catName})

        reset()
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <div>
                <h4>Add cat:</h4>
                <input type="text" placeholder={'name'} {...register('catName')}/>
                <button onClick={()=>submit}>Save</button>
            </div>
        </form>

    );
};

export default CatFormComponent;