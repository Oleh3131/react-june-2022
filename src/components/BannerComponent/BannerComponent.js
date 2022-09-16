import React from 'react';

import './BannerComponent.css'

const BannerComponent = ({banner}) => {

    const {devName, name, description, fullUsageRights, images} = banner;

    return (
        <div>
            <h2>devName: {devName}</h2>
            <h3>name: {name}</h3>
            <p>description: {description}</p>
            <h5>full usage rights: {fullUsageRights}</h5>
            <img src={images.smallIcon} alt={name}/>
        </div>
    );
};

export default BannerComponent;