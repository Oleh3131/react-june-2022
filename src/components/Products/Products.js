import React, {useEffect, useState} from 'react';

import './Products.css'
import Product from "../Product/Product";

const Products = () => {

    let [products,setProducts] = useState([]);

    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
            .then(value => value.json())
            .then(value => {
                setProducts(value.filter(value=>value.category === 'electronics'));
            });

    },[])

    return (
        <div className={'ProductsBlock'}>
            {products.map(value => <Product key={value.id} product={value}/>)}
        </div>
    );
};

export default Products;