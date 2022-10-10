import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";


const initialState ={
    posts:[],
    onePost:null,
    loading:false,
    error:null
}

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading=true
            })
            .addCase(getById.fulfilled,(state,action)=>{
                state.onePost = action.payload;
            })
    }
});

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {

            const {data} = await postService.getAll();

            return data

        } catch (e) {

            return rejectedWithValue(e.response.data);

        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {

            const {data} = await postService.getById(id);

            return data

        } catch (e) {

            return rejectedWithValue(e.response.data);

        }
    }
);

const {reducer:postReducer} = postSlice;

const postActions={
    getAll,
    getById
}

export {
    postReducer,
    postActions
}