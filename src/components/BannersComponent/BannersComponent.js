import React, {useEffect, useState} from 'react';

import './BannersComponent.css'
import getBanners from "../../services/banner.service";
import BannerComponent from "../BannerComponent/BannerComponent";
import PaginationComponent from "../PaginationComponent/PaginationComponent";


const BannersComponent = () => {

    const [banners, setBanners] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [numberOfBasicPages] = useState(10);

    useEffect(() => {

        getBanners().then(value => setBanners(value.data.data))

    }, [])

    const lastIndexPage = currentPage * numberOfBasicPages;
    const firstIndexPage = lastIndexPage - numberOfBasicPages;
    const currentIndexPage = banners.slice(firstIndexPage, lastIndexPage)

    function paginate(pageNumber){

        setCurrentPage(pageNumber)

    }


    return (
        <div>
            <h1>Banners</h1>

            {currentIndexPage.map(value => <BannerComponent key={value.id} banner={value}/>)}

            <PaginationComponent numberOfBasicPages={numberOfBasicPages} totalPages={banners.length} paginate={paginate}/>

        </div>
    );
};

export default BannersComponent;