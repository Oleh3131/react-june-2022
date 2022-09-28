import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";

const UserDetails = () => {

    const [user,setUser] = useState(null);

    const {id} = useParams();

    useEffect(() => {

         userService.getById(id).then(({data}) => setUser(data))

    },[id]);

    return (
        <div>
            {user && <div>
                <h2>id: {user.id}</h2>
                <h3>name: {user.name}</h3>
                <h3>username: {user.username}</h3>
                <h4>email: {user.email}</h4>
                <h4>address:</h4>
                <ul>
                    <li>street: {user.address.street}</li>
                    <li>suite: {user.address.suite}</li>
                    <li>city: {user.address.city}</li>
                    <li>zipcode: {user.address.zipcode}</li>
                    <ul>
                        <li>geo lat: {user.address.geo.lat}</li>
                        <li>geo lng: {user.address.geo.lng}</li>
                    </ul>
                </ul>
                <h4>phone: {user.phone}</h4>
                <h4>website: {user.website}</h4>
                <h4>company:</h4>
                <ul>
                    <li>companyname: {user.company.name}</li>
                    <li>catchPhrase: {user.company.catchPhrase}</li>
                    <li>bs: {user.company.bs}</li>
                </ul>
            </div>}
        </div>
    );
};

export default UserDetails;