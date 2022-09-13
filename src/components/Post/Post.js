import React from 'react';

import './Post.css'

const Post = ({post:{userId,id,title,body}}) => {

    return (
        <div className={'PostBlock'}>
            <h1>userId:{userId}</h1>
            <h2>id:{id}</h2>
            <p>title:{title}</p>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;