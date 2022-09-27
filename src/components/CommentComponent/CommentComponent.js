import React from 'react';


const CommentComponent = ({comment,givePostId}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <div>
                <h2>postId: {postId}</h2>
                <h3>id: {id}</h3>
                <h4>name: {name}</h4>
                <h4>email: {email}</h4>
                <h4>body: {body}</h4>
            </div>

            <button onClick={()=>givePostId(postId)}>Show post</button>

        </div>
    );
};

export default CommentComponent;