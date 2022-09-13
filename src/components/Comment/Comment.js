import React from 'react';

import './Comment.css'

const Comment = ({comment:{postId,id,name,email,body}}) => {
    return (
        <div className={'commentBlock'}>
            <h1>id:{id}</h1>
            <h2>postId:{postId}</h2>
            <h3>name:{name}</h3>
            <p>email:{email}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Comment;