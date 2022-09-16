import React from 'react';

import './PaginationComponent.css'

const PaginationComponent = ({launchesOnPage, totalLaunches,paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLaunches / launchesOnPage); i++) {

        pageNumbers.push(i);

    }

    return (
        <div>
            <ul className={'pagination'}>
                {pageNumbers.map(number=>(
                    <li className={'pageItem'} key={number} onClick={()=>paginate(number)}>
                        <a href="#" className="pageLink">{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaginationComponent;