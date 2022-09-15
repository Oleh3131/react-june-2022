import React from 'react';

import './Book.css'

const Book = (props) => {

   let {book:{name,authors,numberOfPages,publisher,country,mediaType,released}}=props

    return (
        <div className={'BookBlock'}>
            <h1>name: {name}</h1>
            <h2>authors: {authors}</h2>
            <h3>numberOfPages:{numberOfPages}</h3>
            <h4>publisher:{publisher}</h4>
            <h4>country:{country}</h4>
            <h4>mediaType:{mediaType}</h4>
            <h4>released:{released}</h4>
        </div>
    );
};

export default Book;