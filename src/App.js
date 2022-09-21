import './App.css';
import SecondFormComponentExample
    from "./components/SecondFormComponentExample/SecondFormComponentExample";
import FirstFormComponentExample
    from "./components/FirstFormComponentExample/FirstFormComponentExample";

function App() {
    return (
        <div className="App">
           <FirstFormComponentExample/>
           <SecondFormComponentExample/>
        </div>
    );
}

export default App;
