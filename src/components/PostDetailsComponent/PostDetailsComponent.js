import React from 'react';
import {useLocation} from "react-router-dom";

const PostDetailsComponent = () => {

    const {state} = useLocation();

    return (
        <div>
            <h2>userId: {state.userId}</h2>
            <h4>id: {state.id}</h4>
            <h4>title: {state.title}</h4>
            <h4>title: {state.body}</h4>
        </div>
    );
};

export default PostDetailsComponent;