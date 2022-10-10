import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentActions} from "../../redux";
import CommentsComponent from "../../components/CommentsComponent/CommentsComponent";
import css from './CommentPage.module.css'


const CommentPage = () => {

    const dispatch = useDispatch();

    const {comments,loading,error} = useSelector(state => state.commentReducer);

    useEffect(() => {

        dispatch(commentActions.getAll())

    }, []);

    return (
        <div className={css.MainCommentBlock}>
            {loading&&<h1>Loading...</h1>}
            {error&&<h1>Error!!!</h1>}
            {comments.map(comment=><CommentsComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentPage;