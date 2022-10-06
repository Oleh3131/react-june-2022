import React, {useRef} from 'react';
import {useForm} from "react-hook-form";




const DogFormComponent = ({dispatch}) => {

    const {register, handleSubmit} = useForm({mode:"all"});

    const dogInput = useRef();

    function submitSecond({dogName}){

        return dogName;

    }

    return (
        <form onSubmit={handleSubmit(submitSecond)}>
            <div>
                <h4>Add dog:</h4><input type="text" placeholder={'name'} {...register('dogName')} ref={dogInput}/>
                <button onClick={()=>dispatch({type:'dogName',payload:dogInput.current.value})}>Save</button>
            </div>
        </form>

    );
};

export default DogFormComponent;