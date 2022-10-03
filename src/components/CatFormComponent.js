import React from 'react';
import {useForm} from "react-hook-form";


const CatFormComponent = () => {


    const {register, handleSubmit, reset} = useForm({mode: "all"});


    function submit(animal) {

        console.log(animal)

        reset()
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <div>
                <h4>Add cat:</h4>
                <input type="text" placeholder={'name'} {...register('catName')}/>
                <button>Save</button>
            </div>
        </form>

    );
};

export default CatFormComponent;