import React, {useEffect, useState} from 'react';

import './Books.css'
import Book from "../Book/Book";

const Books = () => {

    let [books,setBooks] = useState([]);

    useEffect(()=>{

        fetch('https://www.anapioficeandfire.com/api/books')
            .then(value => value.json())
            .then(value => setBooks(value))

    },[])

    return (
        <div>
            {books.map(value => <Book key={value.isbn} book={value}/>)}
        </div>
    );
};

export default Books;