import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";



const UseFormComponent = ({setCars}) => {

    const {register, handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:"all"
    });

    useEffect(()=>{

        setValue('model', 'Volvo');
        setValue('price', 25000);
        setValue('year', 2016);

    },[])

const submit = async (car)=>{

    const {data} = await carService.create(car);

    setCars(cars=>[...cars,data]);

    reset();
}


    // ------------------------ВАРІАНТ ВАЛІДАЦІЇ ВБУДОВАНОЇ----------------------------------------------------

//     return (
//         <form onSubmit={handleSubmit(submit)}>
//             <input type="text" placeholder={'model'} {...register('model',{required:true,minLength:{value:2,message:"enter at least two letters"}})}/>
//             {errors.model && <span>{errors.model.message}</span>}
//             <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
//             <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
//             <button disabled={!isValid}>Save info</button>
//         </form>
//     );
// };

// --------------------------------------------------------------------------------------------------------------------


    // -------------------------------КРАЩИЙ ВАРІАНТ ЧЕРЕЗ JOI (ПІДЄДНУВАНА ВАЛІДАЦІЯ)--------------------------------------

return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'model'} {...register('model')}/>
        {errors.model && <span>{errors.model.message}</span>}
        <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
        {errors.price && <span>{errors.price.message}</span>}
        <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
        {errors.year && <span>{errors.year.message}</span>}
        <button disabled={!isValid}>Save info</button>
    </form>
);
};

export default UseFormComponent;