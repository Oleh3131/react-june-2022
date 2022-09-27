import React from 'react';

const AlbumComponent = ({album}) => {

    const {id,userId,title} = album;
    
    return (
        <div>
           <h2>id: {id}</h2>
           <h4>userId: {userId}</h4>
           <h4>title: {title}</h4>
        </div>
    );
};

export default AlbumComponent;