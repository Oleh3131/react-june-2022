import React from 'react';
import {Link} from "react-router-dom";
import style from "./PostComponent.module.css";

const PostComponent = ({post}) => {

    const {userId, id, title} = post;

    return (
        <div className={style.postBlock}>
            <h2>userId: {userId}</h2>
            <h4>id: {id}</h4>
            <h4>title: {title}</h4>
            <Link to={id.toString()} state={{...post}}>Post Details</Link>
        </div>
    );
};

export default PostComponent;