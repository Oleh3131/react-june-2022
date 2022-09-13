import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value));

    }, [])

    return (
        <div className={'PostsBlock'}>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;