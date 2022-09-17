import React from 'react';

import './PaginationComponent.css'

const PaginationComponent = ({
                                 numberOfBasicPages,
                                 totalPages,
                                 paginate,
                                 currentPage,
                                 setCurrentPage
                             }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages / numberOfBasicPages); i++) {

        pageNumbers.push(i);

    }

    function prevPage() {

        if (currentPage !== 1) {
            setCurrentPage(page => page - 1)
        }


    }

    function nextPage() {

        if (currentPage <= pageNumbers.length - 1) {
            setCurrentPage(page => page + 1)
        }
    }

    function prevElements() {



    }

    function nextElements() {



    }


    return (
        <div className={"pagination"}>

            <button className={'prevElements'} onClick={()=>prevElements()}>Back</button>

            <div className={'ulBlock'}>
                <ul className={'ulList'}>
                    {pageNumbers.map(number => (
                        <li className={'pageItem '} key={number} onClick={() => paginate(number)}>
                            <a href="#">{number}</a></li>
                    ))}
                </ul>
            </div>

            <button className={'nextElements'} onClick={()=>nextElements()}>Next</button>

            <div className={'blockOfTwoButtons'}>
                <button className={'previousPage'} onClick={() => prevPage()}>Previous page</button>
                <button className={'nextPage'} onClick={() => nextPage()}>Next page</button>
            </div>
        </div>
    );
};

export default PaginationComponent;