import React from 'react';
import {useForm} from "react-hook-form";

import {useReducer2} from "../reducers";

const DogFormComponent = () => {

    const {register, handleSubmit} = useForm({mode:"all"});

    const [state,dispatch] = useReducer2();

    function submitSecond({dogName}){

        return dogName;

    }

    return (
        <form onSubmit={handleSubmit(submitSecond)}>
            <div>
                <h4>Add dog:</h4><input type="text" placeholder={'name'} {...register('dogName')}/>
                <button onClick={()=>dispatch({type:'dogName',payload:submitSecond()})}>Save</button>
            </div>
        </form>

    );
};

export default DogFormComponent;