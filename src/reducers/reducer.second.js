import React, {useReducer} from 'react';

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

        }

        return {...state}

    }

    const [state, dispatch] = useReducer(reducer, 0, initialValue);

    return (
        <div>

            <h2>FirstValue:{state.a}</h2>
            <button onClick={()=>dispatch({type:'firstIncrement'})}>First increment</button>
            <button onClick={()=>dispatch({type:'firstDecrement'})}>First decrement</button>

            <hr/>

            <h2>SecondValue:{state.b}</h2>
            <button onClick={()=>dispatch({type:'secondIncrement'})}>Second increment</button>
            <button onClick={()=>dispatch({type:'secondDecrement'})}>Second decrement</button>

            <hr/>

            <h2>ThirdValue:{state.c}</h2>
            <button onClick={()=>dispatch({type:'thirdIncrement'})}>Third increment</button>
            <button onClick={()=>dispatch({type:'thirdDecrement'})}>Third decrement</button>

        </div>
    );
};

export default ReducerSecond;