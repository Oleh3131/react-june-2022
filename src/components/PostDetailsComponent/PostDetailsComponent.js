import React from 'react';

const PostDetailsComponent = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div>
            <h2>userId: {userId}</h2>
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>
            <h2>body: {body}</h2>
        </div>
    );
};

export default PostDetailsComponent;