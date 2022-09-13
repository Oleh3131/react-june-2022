import React from 'react';

import './User.css'

const User = ({user:{id,name,username,email,address,phone,website,company}}) => {
        return (
            <div className={'UserBlock'}>
                <h2>id:{id}</h2>
                <h3>name:{name}</h3>
                <h3>username:{username}</h3>
                <h4>email:{email}</h4>
                <h4>street:{address.street}</h4>
                <h4>suite:{address.suite}</h4>
                <h4>city:{address.city}</h4>
                <h4>zipcode:{address.zipcode}</h4>
                <h4>lat:{address.geo.lat}</h4>
                <h4>lng:{address.geo.lng}</h4>
                <h4>phone:{phone}</h4>
                <h4>website:{website}</h4>
                <h4>company name:{company.name}</h4>
                <h4>catchPhrase:{company.catchPhrase}</h4>
                <h4>bs:{company.bs}</h4>
            </div>
        );
    }

export default User;
