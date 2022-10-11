import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";


const initialState = {
    users: [],
    oneUser: null,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{

      createUser:(state,action)=>{

          const user = action.payload.user;

          state.users.push(user);

      }
    },
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading = true;
            })
    }
});


const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {

            const {data} = await userService.getAll();

            const valueData = data.data;

            return valueData;

        } catch (e) {

            return rejectWithValue(e.response.data);

        }
    }
);



const {reducer:userReducer,actions:createUser} = userSlice;

const userActions={
    getAll,
    createUser
}

export {
    userActions,
    userReducer
}

