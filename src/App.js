import css from './App.module.css'
import FormComponent from "./components/FormComponent/FormComponent";
import UsersComponent from "./components/Users/UsersComponent";

function App() {
    return (
        <div className={css.App}>
            <FormComponent/>
            <UsersComponent/>
        </div>
    );
}

export default App;
