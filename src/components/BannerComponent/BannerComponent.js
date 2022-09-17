import React from 'react';

import './BannerComponent.css'

const BannerComponent = ({banner}) => {

    const {devName, name, description, images} = banner;

    return (
        <div className={"bannerBlock"}>

            <div className={'elementsOfBannerBlock'}>
                <h2>devName: {devName}</h2>
                <h3>name: {name}</h3>
                <p>description: {description}</p>
            </div>

            <img src={images.smallIcon} alt={name}/>

        </div>
    );
};

export default BannerComponent;