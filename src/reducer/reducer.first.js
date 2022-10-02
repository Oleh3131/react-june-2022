import React, {useReducer} from 'react';


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
        <div>
            <h1>Value:{state.initialValue}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
        </div>
    );
};

export default ReducerFirst;