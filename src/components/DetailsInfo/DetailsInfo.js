import React from 'react';
import {useSelector} from "react-redux";

const DetailsInfo = () => {

    const {oneUser} = useSelector(state => state.userReducer);

    return (
        <div>
            {oneUser&&<div>{oneUser.name}</div>}
        </div>
    );
};

export default DetailsInfo;