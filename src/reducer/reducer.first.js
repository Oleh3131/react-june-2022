import React, {useReducer} from 'react';

import css from './reducer.module.css'

const ReducerFirst = () => {

    function reducer(state, action) {
        if (action.type === 'INCREMENT') {

            return {...state,initialValue:state.initialValue+10}

        } else if (action.type === 'DECREMENT') {

            return {...state,initialValue:state.initialValue-2}

        }

        return {...state};

    }

    const [state, dispatch] = useReducer(reducer, {initialValue: 0});

    return (
        <div className={css.ContentBlock}>
            <h1>Value:{state.initialValue}</h1>

            <span className={css.ButtonBlock}>
                 <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
            </span>

        </div>
    );
};

export default ReducerFirst;