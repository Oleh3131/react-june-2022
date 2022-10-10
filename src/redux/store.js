import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer} from "./slices/post.slice";
import {commentReducer} from "./slices/comment.slice";

const mainReducer = combineReducers({
    postReducer,
    commentReducer
});

const setUpStore=() => configureStore({
    reducer: mainReducer
});

export {
    setUpStore
}