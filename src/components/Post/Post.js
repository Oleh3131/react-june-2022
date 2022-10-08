import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices/post.slice";

const Post = ({post}) => {

    const {userId,id,title,body} = post;

    const dispatch = useDispatch();

    return (
        <div>
            <h2>userId:{userId}</h2>
            <h4>id:{id}</h4>
            <h4>title:{title}</h4>
            <h4>body:{body}</h4>
            <button onClick={()=>dispatch(postActions.getById({id}))}>Show post details</button>
            <button onClick={()=>dispatch(postActions.deleteById(id))}>Delete post</button>
        </div>
    );
};

export default Post;