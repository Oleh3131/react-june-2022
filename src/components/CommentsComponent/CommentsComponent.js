import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import CommentComponent from "../CommentComponent/CommentComponent";
import {Outlet} from "react-router-dom";
import {postService} from "../../services/post.service";
import PostDetailsComponent from "../PostDetailsComponent/PostDetailsComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState([]);

    const [post,setPost] = useState(null);

    useEffect(() => {

        commentsService.getAll().then(({data}) => setComments(data))

    }, [])

    function givePostId(id) {
        
        postService.getById(id).then(({data})=>setPost(data))
        
    }

    return (
        <div>
            {comments.length ? comments.map(comment => <CommentComponent key={comment.id} comment={comment} givePostId={givePostId}/>) :
                <h1>Loading....</h1>}

            <div>
                {post && <PostDetailsComponent post={post}/> }
            </div>

        </div>
    );
};

export default CommentsComponent;