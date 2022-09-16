import React from 'react';

import './UserInfoComponent.css'

const UserInfoComponent = ({user}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'blockOfUserInfo'}>
            <h2>id: {id}</h2>
            <h3>name: {name}</h3>
            <h3>username: {username}</h3>
            <h4>email: {email}</h4>
            <h4>address:</h4>
            <ul>
                <li>street: {address.street}</li>
                <li>suite: {address.suite}</li>
                <li>city: {address.city}</li>
                <li>zipcode: {address.zipcode}</li>
                <ul>
                    <li>geo lat: {address.geo.lat}</li>
                    <li>geo lng: {address.geo.lng}</li>
                </ul>
            </ul>
            <h4>phone: {phone}</h4>
            <h4>website: {website}</h4>
            <h4>company:</h4>
            <ul>
                <li>companyname: {company.name}</li>
                <li>catchPhrase: {company.catchPhrase}</li>
                <li>bs: {company.bs}</li>
            </ul>
        </div>
    );
};

export default UserInfoComponent;