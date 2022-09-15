import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services/user.service";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);

// ----------useState для загрузки-----------------
    const [loading, setLoading] = useState(false);

// ----------useState для поточної сторінки котру треба відображати--------------
    const [currentPage, setCurrentPage] = useState(1);

// ----------useState для показу кожної сторінки для загрузки-----------------
    const [usersPerPage] = useState(2);


    useEffect(() => {
        setLoading(true)
        getUsers().then(value => setUsers(value.data))
        setLoading(false)
    }, [])


    const lastUserIndex = currentPage * usersPerPage
    const firstUserIndex = lastUserIndex - usersPerPage
    const currentUsers = users.slice(firstUserIndex, lastUserIndex)

    function paginate(pageNumber) {

        setCurrentPage(pageNumber)

    }


    function nextPage() {

        setCurrentPage(page=>page+1)

    }

    function prevPage() {

        setCurrentPage(page=>page-1)

    }


    return (
        <div>
            <h1>Users</h1>

            {currentUsers.map(value => <UserComponent key={value.id} users={value} loading={loading}/>)}

            <PaginationComponent usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>

            <button className="prevPage" onClick={()=>prevPage()}>Previous page</button>
            <button className="nextPage" onClick={()=>nextPage()}>Next page</button>
        </div>
    );
};

export default UsersComponent;