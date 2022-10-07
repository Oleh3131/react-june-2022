import React, {useEffect, useState} from 'react';


//Проводимо порівняльну аналогію між функціональною компонентою і класовою

const FunctionComponent = ({name}) => {

    console.log('constructor');

    const [state,setState] = useState({a: 0, b: 25});

    useEffect(()=>{

        console.log('componentDidMount');


        //Реалізовуємо componentWillUnmount коли компонента помре
        return ()=>{

            console.log('componentWillUnmount');

        }

    },[])


    // componentDidUpdate не потрібний тому що щоб слідкувати за чимось у нас є
    // useEffect()


    function inc() {
        setState({...state,a:state.a+1})
    }

    return (
        <div>
            {console.log('render')}
            <h4>FunctionComponent</h4>
            <div>A:{state.a}</div>
            <div>B:{state.b}</div>
            <div>Props:{name}</div>
            <button onClick={()=>inc()}>Increment</button>
        </div>
    );
};

export default FunctionComponent;