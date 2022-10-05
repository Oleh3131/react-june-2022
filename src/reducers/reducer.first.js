import React, {useReducer} from 'react';

import css from "../App.module.css";
import CatFormComponent from "../components/CatFormComponent";
import DogFormComponent from "../components/DogFormComponent";


const ReducerFirst = () => {

    function reducer(state, action) {

        switch (action.type) {

            case 'dogName':

                return {...state, dogs: [...state.dogs,{name: action.payload, id: new Date.now()}]}

            case 'deleteDog':

                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}
            default:

                return state;
        }
    }


        const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

        return (
            <div>

                <div className={css.FormBlock}>
                    {/*<CatFormComponent/>*/}
                    <DogFormComponent dispatch={dispatch}/>
                </div>

                <div>
                    {state.dogs.map(dog => (<div key={dog.id}>{dog.name}</div>))}
                </div>

            </div>
        );
    };

    export default ReducerFirst;




