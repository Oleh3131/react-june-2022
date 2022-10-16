import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.slice";

let mainReducer = combineReducers({
    userReducer
});

const setUpSpore = () => configureStore({
    reducer: mainReducer
});

type MainState=ReturnType<typeof mainReducer>

type AppStore=ReturnType<typeof setUpSpore>

type AppDispatch = AppStore['dispatch'];

export {
    setUpSpore
}

export type {
    MainState,
    AppDispatch,
    AppStore
}