import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent = () => {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        postService.getAll().then(({data})=>setPosts(data))

    },[])

    return (
        <div>
            {posts.length?posts.map(post=><PostComponent key={post.id} post={post}/>):
            <h1>Loading...</h1>}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsComponent;