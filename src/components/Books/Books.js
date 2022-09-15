import React, {useEffect, useState} from 'react';

import './Books.css'
import Book from "../Book/Book";

const Books = () => {

    let [books,setBooks] = useState([]);

    useEffect(()=>{

        fetch('https://www.anapioficeandfire.com/api/books?page=1&pageSize=12')
            .then(value => value.json())
            .then(value => setBooks(value))

    },[])

    return (
        <div className={'BooksBlock'}>
            {books.map(value => <Book key={value.isbn} book={value}/>)}
        </div>
    );
};

export default Books;