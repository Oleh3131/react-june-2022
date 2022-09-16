import React, {useEffect, useState} from 'react';

import './LaunchesComponent.css'
import getLaunches from "../../services/spaceX.service";
import LaunchComponent from "../LaunchComponent/LaunchComponent";
import PaginationComponent from "../PaginationComponent/PaginationComponent";


const LaunchesComponent = () => {

    const [launches, setLaunches] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [launchesOnPage] = useState(10);


    useEffect(() => {
        getLaunches().then(value => setLaunches(value.data.filter(value => value.launch_year !== '2020')))
    }, [])


    // шукаємо індекс другої сторінки
    const lastLaunchesindex = currentPage * launchesOnPage;
    // шукаємо індекс першої сторінки
    const firstLaunchesindex = lastLaunchesindex - launchesOnPage;
    // визначаємо поточну сторінку
    const currentLaunches = launches.slice(firstLaunchesindex, lastLaunchesindex);

    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function nextPage() {

        if(currentPage <= 8){
            setCurrentPage(page=>page+1)
        }

    }

    function prevPage() {
        if(currentPage !== 1){
            setCurrentPage(page=>page-1)
        }

    }


    return (
        <div className={'launchesBlock'}>

            <h1>Launches</h1>

            {currentLaunches.map(value => <LaunchComponent key={value.flight_number} launch={value}/>)}

            <PaginationComponent launchesOnPage={launchesOnPage} totalLaunches={launches.length} paginate={paginate}/>

            <div className={'blockOfButtons'}>
                <button className={'prevPage'} onClick={()=>prevPage()}>Previous Page</button>
                <button className={'nextPage'} onClick={()=>nextPage()}>Next Page</button>
            </div>

        </div>
    );
};

export default LaunchesComponent;