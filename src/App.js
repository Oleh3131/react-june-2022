import {Link, Route, Routes} from "react-router-dom";

import style from './App.module.css';
import HomeComponent from "./components/HomeComponent/HomeComponent";
import TodosComponent from "./components/TodosComponent/TodosComponent";
import AlbumsComponent from "./components/AlbumsComponent/AlbumsComponent";
import CommentsComponent from "./components/CommentsComponent/CommentsComponent";
import NotFoundPageComponent from "./components/NotFoundPageComponent/NotFoundPageComponent";



function App() {
    return (
        <div className={style.appBlock}>

                <ul className={style.menu}>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/todos'}>todos</Link></li>
                    <li><Link to={'/albums'}>albums</Link></li>
                    <li><Link to={'/comments'}>comments</Link></li>
                </ul>


                <Routes>
                    {/*робить початкову URL батьківською і відкриває її головною при переході*/}
                    {/*<Route index element={<HomeComponent/>}/>*/}

                    <Route path={'/'} element={<HomeComponent/>}/>
                    <Route path={'/todos'} element={<TodosComponent/>}/>
                    <Route path={'/albums'} element={<AlbumsComponent/>}/>
                    <Route path={'/comments'} element={<CommentsComponent/>}/>
                    <Route path={'*'} element={<NotFoundPageComponent/>}/>
                </Routes>
        </div>
    );
}

export default App;
