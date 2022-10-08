import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.sclice";
import {postReducer} from "./slices/post.slice";

const mainReducer = combineReducers({
    userReducer,
    postReducer
});

// створюємо store
const setUpStore =()=> configureStore({
    reducer: mainReducer
});

export {
    setUpStore
}