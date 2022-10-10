import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";
import css from './PostsComponent.module.css'


const PostsComponent = ({post}) => {

    const {id,title} = post;

    const dispatch = useDispatch();

    return (
        <div className={css.PostBlock}>
            <h3>id:{id}</h3>
            <p>title:{title}</p>
            <button onClick={()=>dispatch(postActions.getById({id}))} className={css.Button}><Link to={'/postInfo'} >Show details</Link></button>
        </div>
    );
};

export default PostsComponent;