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


    let pageItem = document.getElementsByClassName('pageItem');

    for (let i=1;i<pageItem.length;i++){

        pageItem[i].style.position = 'relative';

    }
    /* конфігурація */
let width = 45; // ширина картинки
let count = 7; // видима кількість зображень
//
    const ulList = document.getElementsByClassName("ulList")[0];


let position = 0; // положення стрічки прокручування


    function prevElements() {

        // зрушення вліво
        position += width * count;
        // останній рух вліво може бути не на 3, а на 2 або 1 елемент
        position = Math.min(position, 0);
        pageItem.style.marginLeft = position + 'px';

    }

    function nextElements() {

        // зрушення вправо
        position -= width * count;
        //останній рух праворуч може бути не на 3, а на 2 або 1 елемент
        position = Math.max(position, -width * (ulList.length - count));
        pageItem.style.marginLeft = position + 'px';

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