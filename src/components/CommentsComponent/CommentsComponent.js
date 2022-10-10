import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {commentActions} from "../../redux";
import css from './CommentsComponent..module.css'

const CommentsComponent = ({comment}) => {

    const {id,name,email} = comment;

    const dispatch = useDispatch();

    return (
        <div className={css.CommentBlock}>
           <h3>id: {id}</h3>
           <p>name: {name}</p>
           <p>email: {email}</p>
            <button onClick={()=>dispatch(commentActions.getById({id}))} className={css.Button}><Link to={'/commentInfo'}>Comment details</Link></button>
        </div>
    );
};

export default CommentsComponent;