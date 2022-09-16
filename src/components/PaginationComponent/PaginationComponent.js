import React from 'react';

import './PaginationComponent.css'

const PaginationComponent = ({usersPerPage,totalUsers,paginate}) => {

    // відмальовуємо загальну кількість кнопок
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {

        pageNumbers.push(i);

    }

    return (
        <div className={'blockOfPagination'}>
            <ul className={'pagination'}>
                {
                    pageNumbers.map(number => (
                        <li className={'pageItem'} key={number} onClick={()=>paginate(number)}>
                            <a href="#" className="pageLink">
                                {number}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default PaginationComponent;