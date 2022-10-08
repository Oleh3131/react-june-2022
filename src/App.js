import './App.css';
import DetailsInfo from "./components/DetailsInfo/DetailsInfo";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="App">
           <DetailsInfo/>
            <div>
                <Users/>
                <Posts/>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
