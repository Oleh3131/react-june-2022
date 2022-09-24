import React, {useEffect, useState} from 'react';

import {commentService} from "../../services";
import CommentComponent from "../CommentComponent/CommentComponent";
import FormComponent from "../FormComponent/FormComponent";

const CommentsComponent = () => {

    const [comments,setComments] = useState([]);

    useEffect(() => {

        commentService.getAll().then(({data})=>setComments(data))

    },[]);

    return (
        <div>
            <FormComponent setComments={setComments}/>
            {comments? comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>):<h1>Loading...</h1>}
        </div>
    );
};

export default CommentsComponent;