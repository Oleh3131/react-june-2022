import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux/slices/post.slice";
import Post from "../Post/Post";

const Posts = () => {

    const {posts,error,loading,onePost} = useSelector(state => state.postReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(postActions.getAll())

    },[])

    return (
        <div>
            {loading&&<h1>Loading...</h1>}
            {error&&<h1>Error!</h1>}
            {onePost && <h2>{onePost.body}</h2>}
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;