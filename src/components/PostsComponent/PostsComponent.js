import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services";
import PostComponent from "../PostComponent/PostComponent";
import style from "./PostsComponent.module.css";

const PostsComponent = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        postService.getAll().then(({data}) => setPosts(data))

    }, [])

    return (
        <div className={style.postsBlock}>

            <div  className={style.postsBlockInfo}>
                {posts.length ? posts.map(post => <PostComponent key={post.id} post={post}/>) :
                    <h1>Loading...</h1>}
            </div>

            <Outlet/>

        </div>
    );
};

export default PostsComponent;