import React from 'react';
import {useSelector} from "react-redux";

import css from './PostComponentInfo.module.css'

const PostComponent = () => {

    const {onePost} = useSelector(state => state.postReducer);

    return (
        <div className={css.PostInfoBlock}>
            {onePost&&<h4>userId: {onePost.userId}</h4>}
            {onePost&&<h4>id: {onePost.id}</h4>}
            {onePost&&<p>title: {onePost.title}</p>}
            {onePost&&<p>body: {onePost.body}</p>}
        </div>
    );
};

export default PostComponent;