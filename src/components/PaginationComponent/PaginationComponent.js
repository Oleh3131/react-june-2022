import React from 'react';

const PaginationComponent = ({usersPerPage,totalUsers,paginate}) => {

    // відмальовуємо загальну кількість кнопок
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {

        pageNumbers.push(i);

    }

    return (
        <div>
            <ul className={'pagination'}>
                {
                    pageNumbers.map(number => (
                        <li className={'pageItem'} key={number}>
                            <a href="!#" className="pageLink" onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default PaginationComponent;