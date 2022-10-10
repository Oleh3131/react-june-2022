import {Route, Routes} from "react-router-dom";

import css from './App.module.css'
import HeaderPage from "./pages/HeaderPage/HeaderPage";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import PostPage from "./pages/PostPage/PostPage";
import CommentPage from "./pages/CommentPage/CommentPage";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import NotFoundPageComponent from "./components/NotFoundPageComponent/NotFoundPageComponent";
import PostComponent from "./components/PostComponent/PostComponent";
import CommentComponent from "./components/CommentComponent/CommentComponent";



function App() {
    return (
        <div className={css.App}>
            <Routes>
                <Route path={'/'} element={<HeaderPage/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route path={'home'} element={<HomeComponent/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'/postInfo'} element={<PostComponent/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>
                    <Route path={'/commentInfo'} element={<CommentComponent/>}/>
                    <Route path={'about'} element={<AboutComponent/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPageComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
