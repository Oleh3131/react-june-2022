import './App.css';
import {ClassComponent} from "./components/ClassComponent";
import {useState} from "react";
import FunctionComponent from "./components/FunctionComponent";

function App() {

    const [flag,setFlag] = useState(true);

    return (
        <div className="App">
            {/*{flag&&<ClassComponent name={'Max'}/>}*/}
            {/*<button onClick={()=>setFlag(prev=>!prev)}>Hide info</button>*/}
            {flag&&<FunctionComponent name={'Max'}/>}
            <button onClick={()=>setFlag(prev=>!prev)}>Hide info</button>
        </div>
    );
}

export default App;
