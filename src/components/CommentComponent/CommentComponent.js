import React from 'react';

const CommentComponent = ({comment}) => {

    const {postId,name,email,body} = comment;

    return (
        <div>
            <h1>postId: {postId}</h1>
            <h3>name: {name}</h3>
            <h3>email: {email}</h3>
            <h3>body: {body}</h3>
        </div>
    );
};

export default CommentComponent;