import {Link, Route, Routes} from "react-router-dom";

import style from './App.module.css'
import HomeComponent from "./components/HomeComponent/HomeComponent";
import ContentComponent from "./components/ContentComponent/ContentComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import UsersComponent from "./components/UsersComponent/UsersComponent";
import PostsComponent from "./components/PostsComponent/PostsComponent";
import CommentsComponent from "./components/CommentsComponent/CommentsComponent";
import UserDetails from "./components/UserDetails/UserDetails";
import PostDetailsComponent from "./components/PostDetailsComponent/PostDetailsComponent";

function App() {

    return (
        <div className={style.appBlock}>

            <ul className={style.menu}>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/content'}>Content page</Link></li>
                <li><Link to={'/about'}>About page</Link></li>
            </ul>

            <Routes>
                <Route index element={<HomeComponent/>}/>
                <Route path={'/content'} element={<ContentComponent/>}>
                    <Route path={'users'} element={<UsersComponent/>}>
                        <Route path={':id'} element={<UserDetails/>}/>
                    </Route>
                    <Route path={'posts'} element={<PostsComponent/>}>
                        <Route path={':id'} element={<PostDetailsComponent/>}/>
                    </Route>
                    <Route path={'comments'} element={<CommentsComponent/>}/>
                </Route>
                <Route path={'/about'} element={<AboutComponent/>}/>
            </Routes>

        </div>


    );
}

export default App;
