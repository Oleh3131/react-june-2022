import React from 'react';

import style from './Post.module.css'

const Post = ({post}) => {

    const {userId, id, title, body} = post

    return (
        <div className={style.postBlock}>
            <h2>userId: {userId}</h2>
            <h3>id: {id}</h3>
            <h4>title: {title}</h4>
            <h4>body: {body}</h4>
        </div>
    );
};

export default Post;