import React from 'react';

import styles from './Car.module.css'
import {carService} from "../../services";

const Car = ({car,setCars}) => {

    const {id, model, price, year} = car;

    let deleteCar=async ()=>{

        await carService.deleteById(id);

        setCars(cars=>{
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1);
            return [...cars];
        })

    }

    return (
        <div className={styles.mainCarBlock}>
            <div className={styles.carBlock}>
                <h2>id: {id}</h2>
                <h3>model: {model}</h3>
                <h3>price: {price}</h3>
                <h3>year: {year}</h3>
            </div>
            <div  className={styles.buttonsBlock}>
                <button>Update</button>
                <button onClick={()=>deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export default Car;