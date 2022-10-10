import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../services";


const initialState = {
    comments:[],
    oneComment:null,
    loading:false,
    error:null
}


const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {

            const {data} = await commentService.getAll();

            return data;

        } catch (e) {

            return rejectedWithValue(e.response.data)

        }
    }
);


const getById = createAsyncThunk(
    'commentSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {

            const {data} = await commentService.getById(id);

            return data;

        } catch (e) {

            return rejectedWithValue(e.response.data)

        }
    }
);


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.comments = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading = true;
            })
            .addCase(getById.fulfilled,(state,action)=>{
                state.oneComment = action.payload;
            })
    }
});


const {reducer:commentReducer} = commentSlice;

const commentActions={
    getAll,
    getById
}

export {
    commentReducer,
    commentActions
}