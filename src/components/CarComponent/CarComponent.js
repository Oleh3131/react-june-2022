import React from 'react';

import css from './CarComponent.module.css'
import {carService} from "../../services";

const CarComponent = ({car,setCars}) => {

    const {id,model,price,year} = car;


    function deleteCar() {

        carService.deleteById(id).then(() => {

            setCars(cars => {

                const foundIndex = cars.findIndex(value => value.id === id);

                cars.splice(foundIndex, 1);

                return [...cars];

            });
        });
    }

    function updateCar() {

        carService.updateById(id,car).then((value)=>setCars(cars=>{
            cars.findIndex(value => value.id === id);
        }))

    }

    return (
        <div>
            <h2>id: {id}</h2>
            <h4>model: {model}</h4>
            <h4>price: {price}</h4>
            <h4>year: {year}</h4>
            <div className={css.ButtonsBlock}>
                <button onClick={updateCar}>Update</button>
                <button onClick={deleteCar}>Delete</button>
            </div>
        </div>
    );
};

export default CarComponent;