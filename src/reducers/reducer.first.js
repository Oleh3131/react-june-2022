import React, {useReducer} from 'react';

import css from "./reducer.first.module.css";
import CatFormComponent from "../components/CatFormComponent";
import DogFormComponent from "../components/DogFormComponent";


const ReducerFirst = () => {

    function reducer(state, action) {

        switch (action.type) {

            case 'dogName':

                return {
                    ...state,
                    dogs: [...state.dogs, {
                        name: action.payload,
                        id: state.dogs.map((value, index) => index + 1)
                    }]
                }

            case 'deleteDog':

                return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload)}

            case 'catName':

                return {
                    ...state,
                    cats: [...state.cats, {
                        name: action.payload,
                        id: state.cats.map((value, index) => index + 1)
                    }]
                }

            case 'deleteCat':

                return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}

            default:

                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});


    return (
        <div>

            <div className={css.FormBlock}>
                <CatFormComponent dispatch={dispatch}/>
                <DogFormComponent dispatch={dispatch}/>
            </div>

            <div className={css.MainCatsAndDogsBlock}>
                {state.dogs.map(dog => (
                    <div key={dog.id} className={css.MainDogBlock}>

                        <div className={css.DogBlock}>
                            <h1>{dog.name}</h1>
                            <button onClick={()=>dispatch({type:'deleteDog',payload:dog.id})}>Delete</button>
                        </div>

                    </div>))}
                {state.cats.map(cat => (
                    <div key={cat.id}>
                        <h1>{cat.name}</h1>
                        <button onClick={()=>dispatch({type:'deleteCat',payload:cat.id})}>Delete</button>
                    </div>))}
            </div>

        </div>
    );
};

export default ReducerFirst;




