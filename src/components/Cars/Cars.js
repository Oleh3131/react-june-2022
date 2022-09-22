import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import UseFormComponent from "../useFormComponent/useFormComponent";
import Car from "../Car/Car";

const Cars = () => {

    const [cars,setCars] = useState([]);

    useEffect(()=>{

        carService.getAll().then(({data}) => setCars(data));

    },[])
    return (
        <div>
            <UseFormComponent setCars={setCars}/>
            {cars.map(value => <Car key={value.id} car={value} setCars={setCars}/>)}
        </div>
    );
};

export default Cars;