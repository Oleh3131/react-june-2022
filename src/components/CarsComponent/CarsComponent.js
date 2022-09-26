import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import CarComponent from "../CarComponent/CarComponent";
import FormComponent from "../FormComponent/FormComponent";

const CarsComponent = () => {

    const [cars,setCars] = useState([]);

    useEffect(()=>{

        carService.getAll().then(({data})=>setCars(data))

    },[])

    return (
        <div>
            <FormComponent setCars={setCars}/>
            {cars.length?cars.map(car=><CarComponent key={car.id} car={car} setCars={setCars} />):<h1>Loading</h1>}
        </div>
    );
};

export default CarsComponent;