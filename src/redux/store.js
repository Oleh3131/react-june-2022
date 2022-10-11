import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice";

const mainReducer = combineReducers({
    userReducer
});

const setUpStore = () => configureStore({
    reducer: mainReducer
});

export {
    setUpStore
};