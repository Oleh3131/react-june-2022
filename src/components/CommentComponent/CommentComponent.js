import React from 'react';
import {useSelector} from "react-redux";

import css from "./CommentComponentInfo.module.css";

const CommentComponent = () => {

    const {oneComment} = useSelector(state => state.commentReducer);

    return (
        <div className={css.CommentInfoBlock}>
            {oneComment&& <h3>postId: {oneComment.postId}</h3>}
            {oneComment&& <h3>id: {oneComment.id}</h3>}
            {oneComment&& <p>name: {oneComment.name}</p>}
            {oneComment&& <p>email: {oneComment.email}</p>}
            {oneComment&& <p>body: {oneComment.body}</p>}

        </div>
    );
};

export default CommentComponent;

