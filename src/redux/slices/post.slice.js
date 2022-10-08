import {createAsyncThunk, createSlice,current} from "@reduxjs/toolkit";

import {postService} from "../../services";


// РОБИМО ТЕ Ж САМЕ ЩО І З БЗЕРАМИ АЛЕ РОБЛЯЧИ НАШІ КЕЙСИ АСИНХРОННИМИ-------------------------------------

const initialState = {
    posts: [],
    onePost: null,
    loading: false,
    error: null,
}


const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await postService.getAll();

            return data;

        } catch (e) {

            return rejectWithValue(e.response.data);

        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await postService.getById(id);

            return data;

        } catch (e) {

            return rejectedWithValue(e.response.data)

        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        deleteById:(state,action)=>{
            const index = state.posts.findIndex(user => user.id === action.payload);
            state.posts.splice(index,1)

        //    Але ми не зможемо залогати нашиі пости
        //     console.log(state.posts)
        //     тому використовуємо метод current щоб глянути на пости в консольці при видаленні якщо нам це необхідно
            console.log(current(state.posts));
        }
    },

    //ПЕРШИЙ ВАРІАНТ ЗАПИСУ В STATE ДАНИХ ПРИ АСИНХРОННОМУ ЗАПИТІ------------------------------------
    // extraReducers:{
    //     [getAll.fulfilled]:(state,action)=>{
    //         state.posts = action.payload;
    //     }
    // }


    //ДРУГИй ВАРІАНТ ЗАПИСУ В STATE ДАНИХ ПРИ АСИНХРОННОМУ ЗАПИТІ------------------------------------

    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.posts = action.payload;
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
                state.onePost=action.payload
            })


})

const {reducer:postReducer,actions:{deleteById}} = postSlice;

const postActions={

    getAll,
    getById,
    deleteById

}

export {
    postReducer,
    postActions
}
