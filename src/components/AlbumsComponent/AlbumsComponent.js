import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services";
import AlbumComponent from "../AlbumComponent/AlbumComponent";
import style from "./AlbumsComponent.module.css";

const AlbumsComponent = () => {

    const [albums,setAlbums] = useState([]);
    
    useEffect(()=>{
        
        albumsService.getAll().then(({data})=>setAlbums(data))
        
    },[])
    
    return (
        <div className={style.albumsBlockInfo}>
            {albums.length?albums.map(album=><AlbumComponent key={album.id} album={album}/>):<h1>Loading...</h1>}
        </div>
    );
};

export default AlbumsComponent;