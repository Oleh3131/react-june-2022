import React, {useEffect, useState} from 'react';

import './BannersComponent.css'
import getBanners from "../../services/banner.service";
import BannerComponent from "../BannerComponent/BannerComponent";
import PaginationComponent from "../PaginationComponent/PaginationComponent";


const BannersComponent = () => {

    const [banners, setBanners] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [numberOfBasicPages] = useState(12);

    useEffect(() => {

        getBanners().then(value => setBanners(value.data.data))

    }, [])

    const lastIndexPage = currentPage * numberOfBasicPages;
    const firstIndexPage = lastIndexPage - numberOfBasicPages;
    const currentIndexPage = banners.slice(firstIndexPage, lastIndexPage)

    function paginate(pageNumber) {

        setCurrentPage(pageNumber)

    }

    return (
        <div className={'mainBannersBlock'}>
            <h1>Banners</h1>

            <div className={'bannersBlock'}>
                {currentIndexPage.map(value => <BannerComponent key={value.id} banner={value}/>)}
            </div>

            <PaginationComponent
                numberOfBasicPages={numberOfBasicPages}
                totalPages={banners.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default BannersComponent;