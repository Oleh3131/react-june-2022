import React, {useReducer} from 'react';

import css from './reducer.module.css'

const ReducerSecond = () => {

    function initialValue(value) {

        return {a: value, b: value, c: value}

    }

    function reducer(state, action) {

        switch (action.type) {

            case 'firstIncrement':

                return {...state, a: state.a + 2};

            case 'firstDecrement':

                return {...state, a: state.a - 2};

            case 'secondIncrement':

                return {...state, b: state.b + 5};

            case 'secondDecrement':

                return {...state, b: state.b - 5};

            case 'thirdIncrement':

                return {...state, c: state.c + 10};

            case 'thirdDecrement':

                return {...state, c: state.c - 10};

            default:

                return state

        }
    }

    const [state, dispatch] = useReducer(reducer, 0, initialValue);

    return (
        <div className={css.ButtonBlock}>

            <div className={css.ButtonBlockFirst}>
                <h2>FirstValue:{state.a}</h2>

                <span className={css.First}>
                     <button onClick={() => dispatch({type: 'firstIncrement'})}>First increment</button>
                <button onClick={() => dispatch({type: 'firstDecrement'})}>First decrement</button>
                </span>


            </div>

            <hr/>

            <div className={css.ButtonBlockSecond}>
                <h2>SecondValue:{state.b}</h2>

                <span className={css.Second}>
                     <button onClick={() => dispatch({type: 'secondIncrement'})}>Second increment
                </button>
                <button onClick={() => dispatch({type: 'secondDecrement'})}>Second decrement
                </button>
                </span>

            </div>

            <hr/>

            <div className={css.ButtonBlockThird}>
                <h2>ThirdValue:{state.c}</h2>

                <span className={css.Third}>
                    <button onClick={() => dispatch({type: 'thirdIncrement'})}>Third increment</button>
                <button onClick={() => dispatch({type: 'thirdDecrement'})}>Third decrement</button>
                </span>

            </div>

        </div>
    );
};

export default ReducerSecond;