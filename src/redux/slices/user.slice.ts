import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUser} from "../../interfaces";
import {userService} from "../../services";



interface IStata {
    users: IUser[]
}

const initialState: IStata = {
    users: []
};

const getAll = createAsyncThunk<IUser[], void>(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {

            const {data} = await userService.getAll();

            return data

        } catch (e) {

            const err = e as AxiosError;

            return rejectWithValue(err.response?.data);

        }
    }
);

const create = createAsyncThunk<IUser, { user: IUser; }>(
    'userSlice/create',
    async ({user}, {rejectWithValue}) => {
        try {

            let {data} = await userService.create(user);

            return data;

        } catch (e) {

            const err = e as AxiosError;

            return rejectWithValue(err.response?.data);

        }
    }
);

let userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(create.fulfilled,(state,action)=>{
                state.users.push(action.payload);
            })
    }
});

const {reducer: userReducer} = userSlice;

const userActions = {
    getAll,
    create
}

export {
    userReducer, userActions
}