import React from 'react';
import style from "./AlbumComponent.module.css";

const AlbumComponent = ({album}) => {

    const {id,userId,title} = album;
    
    return (
        <div className={style.albumBlock}>
           <h2>id: {id}</h2>
           <h4>userId: {userId}</h4>
           <h4>title: {title}</h4>
        </div>
    );
};

export default AlbumComponent;