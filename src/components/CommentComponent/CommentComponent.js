import React from 'react';

import style from './CommentComponent.module.css'

const CommentComponent = ({comment,givePostId}) => {

    const {postId, id, name, email, body} = comment;

    return (

            <div className={style.postBlock}>
                <h2>postId: {postId}</h2>
                <h3>id: {id}</h3>
                <h4>name: {name}</h4>
                <h4>email: {email}</h4>
                <h4>body: {body}</h4>
                <button onClick={()=>givePostId(postId)}>Show post</button>
            </div>

    );
};

export default CommentComponent;