import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import PostsComponent from "../../components/PostsComponent/PostsComponent";
import css from './PostPage.module.css'

const PostPage = () => {

    const {posts,loading,error} = useSelector(state => state.postReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(postActions.getAll())

    },[])

    return (
        <div className={css.MainPostBlock}>
            {loading&&<h1>Loading...</h1>}
            {error&&<h1>Error!</h1>}
            {posts.map(post=><PostsComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostPage;