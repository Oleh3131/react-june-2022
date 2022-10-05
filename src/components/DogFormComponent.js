import React from 'react';
import {useForm} from "react-hook-form";



const DogFormComponent = ({dispatch}) => {

    const {register, handleSubmit} = useForm({mode:"all"});

    function submitSecond({dogName}){

        dispatch({type:'dogName',payload:dogName})


    }

    return (
        <form onSubmit={handleSubmit(submitSecond)}>
            <div>
                <h4>Add dog:</h4><input type="text" placeholder={'name'} {...register('dogName')}/>
                <button onClick={()=>submitSecond}>Save</button>
            </div>
        </form>

    );
};

export default DogFormComponent;