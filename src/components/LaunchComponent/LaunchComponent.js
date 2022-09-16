import React from 'react';

import './LaunchComponent.css'

const LaunchComponent = ({launch}) => {

    const {mission_name,launch_year,links} = launch;

    return (
        <div className={'launchBlock'}>
            <h2>Mission name: {mission_name}</h2> 🠖
            <h2>Launch year: {launch_year}</h2>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default LaunchComponent;