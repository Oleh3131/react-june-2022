import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const FormComponent = ({setCars,updateCar,setUpdateCar}) => {

    const {register,handleSubmit,formState:{errors,isValid},reset,setValue} = useForm({
        mode:"all",
        resolver:joiResolver(carValidator)});

    function submit(car) {

        if (updateCar) {

            carService.updateById(updateCar.id, car).then(({data}) => setCars(cars => {

                const foundCar = cars.findIndex(value => value.id === updateCar.id);


                // Object.assign ---> Дозволяє перезаписати дані нашого об'єкта на нові
                Object.assign(foundCar, data);

                setUpdateCar(null);

                return [...cars]

            }));

        } else {

            carService.create(car).then(({data})=>setCars(cars=>[...cars,data]));

        }

        reset();

    }



    useEffect(()=>{

        if (updateCar) {
            setValue('model',updateCar.model, {shouldValidate:true})
                setValue('price',updateCar.price, {shouldValidate:true})
                setValue('year',updateCar.year, {shouldValidate:true})
        }

    },[updateCar,setValue])



    // setValue ----> параметр котрий по дефолту прописує певні дані в нашу форму у відповідності до полів

    // useEffect(()=>{
    //
    //     setValue('model','Volvo')
    //     setValue('price','25000')
    //     setValue('year','2012')
    //
    // },[setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price',{valueAsNumber:true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year',{valueAsNumber:true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar? "Update":"Save info"}</button>
        </form>
    );
};

export default FormComponent;