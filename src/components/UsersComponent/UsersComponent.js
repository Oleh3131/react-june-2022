import React, {useEffect, useState} from 'react';

import {getUser, getUsers} from "../../services/user.service";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import UserComponent from "../UserComponent/UserComponent";
import './UsersComponent.css'
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    const [user,setUser] = useState(null);

// ----------useState для поточної сторінки котру треба відображати--------------
    const [currentPage, setCurrentPage] = useState(1);

// ----------useState для показу кожної сторінки для загрузки-----------------
    const [usersPerPage] = useState(2);


    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])


    const lastUserIndex = currentPage * usersPerPage
    const firstUserIndex = lastUserIndex - usersPerPage
    const currentUsers = users.slice(firstUserIndex, lastUserIndex)

    function paginate(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function nextPage() {
        if(currentPage <=4){
            setCurrentPage(page=>page+1)
        }
    }

    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(page=>page-1);
        }
    }

    function getUserById(id) {
        getUser(id).then(value =>setUser(value.data))
    }


    return (
        <div className={'blockOfSeveralElements'}>

            <h1>Users</h1>

            {user && <UserInfoComponent user={user}/>}

            {currentUsers.map(value => <UserComponent key={value.id} users={value} getUserById={getUserById}/>)}

            <PaginationComponent usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>

            <div className={'buttonBlock'}>
                <button className="prevPage" onClick={()=>prevPage()}>Previous page</button>
                <button className="nextPage" onClick={()=>nextPage()}>Next page</button>
            </div>

        </div>
    );
};

export default UsersComponent;