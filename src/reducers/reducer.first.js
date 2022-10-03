import React, {useReducer} from 'react';
import css from "../App.module.css";
import CatFormComponent from "../components/CatFormComponent";
import DogFormComponent from "../components/DogFormComponent";

function stateFunction(initialValue) {


    return {cats: initialValue, dogs: initialValue}

}

function reducer(state, action) {

    if (action.type === 'dogName') {

        console.log(action.payload)

    }

}

const useReducer2 =()=>useReducer(reducer, [], stateFunction);

const ReducerFirst = () => {

    return (

        <div>

            <div className={css.FormBlock}>
                <CatFormComponent/> }/>
                <DogFormComponent/>
            </div>

            <div>
                {/*<p>{state.dogs}</p>*/}
            </div>

        </div>
    );
};

export {
    ReducerFirst,
    useReducer2
}