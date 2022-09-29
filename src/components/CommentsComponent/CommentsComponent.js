import React, {useEffect, useState} from 'react';

import {commentService} from "../../services";
import CommentComponent from "../CommentComponent/CommentComponent";
import style from './CommentsComponent.module.css'

const CommentsComponent = () => {

    const [comments,setComments] = useState([]);

    useEffect(()=>{

        commentService.getAll().then(({data})=>setComments(data))

    },[])

    return (
        <div className={style.postsBlockInfo}>
            {comments.length?comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>):
            <h1>Loading...</h1>}
        </div>
    );
};

export default CommentsComponent;