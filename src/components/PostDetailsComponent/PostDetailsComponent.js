import React from 'react';

import style from './PostDetailsComponent.module.css'

const PostDetailsComponent = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={style.postInfo}>
            <h2>userId: {userId}</h2>
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>
            <h2>body: {body}</h2>
        </div>
    );
};

export default PostDetailsComponent;