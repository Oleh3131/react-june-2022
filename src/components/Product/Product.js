import React from 'react';

import './Product.css'

const Product = (props) => {

    let {product: {id, title, price, description, category, image, rating}} = props

    return (
        <div className={'ProductBlock'} onClick={() => window.open("https://rozetka.com.ua/computers-notebooks/c80253/")}>
            <h1>id: {id}</h1>
            <h2>title: {title}</h2>
            <h2>price: {price}</h2>
            <p>description: {description}</p>
            <h4>category: {category}</h4>
            <img src={image} alt={title}/>
            <h3>rating: {rating.rate}</h3>
            <h3>rating count: {rating.count}</h3>
        </div>
    );
};

export default Product;