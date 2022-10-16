import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import UserForm from "../../UserForm/UserForm";
import Users from "../../Users/Users";

const UserPage: FC = () => {
    return (
        <div>
            <UserForm/>
            <Outlet/>
            <hr/>
            <Users/>
        </div>
    );
};

export default UserPage;