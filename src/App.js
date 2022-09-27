import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import HomeComponent from "./components/HomeComponent/HomeComponent";
import TodosComponent from "./components/TodosComponent/TodosComponent";
import AlbumsComponent from "./components/AlbumsComponent/AlbumsComponent";
import CommentsComponent from "./components/CommentsComponent/CommentsComponent";



function App() {
    return (
        <div className="appBlock">
            <div className="appMenu">
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/todos'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>
            </div>
            <div className={'content'}>
                <h2>Content</h2>
                <Routes>
                    {/*робить початкову URL батьківською і відкриває її головною при переході*/}
                    {/*<Route index element={<HomeComponent/>}/>*/}

                    <Route path={'/'} element={<HomeComponent/>}/>
                    <Route path={'/todos'} element={<TodosComponent/>}/>
                    <Route path={'/albums'} element={<AlbumsComponent/>}/>
                    <Route path={'/comments'} element={<CommentsComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
