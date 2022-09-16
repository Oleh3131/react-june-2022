import React from 'react';

import './PaginationComponent.css'

const PaginationComponent = ({numberOfBasicPages,totalPages,paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages / numberOfBasicPages); i++) {

        pageNumbers.push(i);

    }

    return (
        <div>
<ul>
    {pageNumbers.map(number=>(
        <li key={number} onClick={()=>paginate(number)}>
            <a href="#">{number}</a></li>
    ))}
</ul>
        </div>
    );
};

export default PaginationComponent;