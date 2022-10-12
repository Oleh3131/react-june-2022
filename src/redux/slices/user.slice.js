import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";


const initialState = {
    users: [],
    oneUser: null,
    loading: false,
    error: null
};

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


const updateUserById = createAsyncThunk(
    'userSlice/updateUserById',
    async ({id,user}, {dispatch}) => {

        const newUser = await userService.updateById(id, user);

        dispatch(updateUser({user:newUser}));

    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

        createUser: (state, action) => {

            const user = action.payload.user;

            state.users.push({...user, id: new Date().getTime()});

        },
        // функція запису кару при кліку на кнопку в state
        userToUpdate: (state, action) => {

            state.oneUser = action.payload.user


        },
        // функція оновлення кара
        updateUser: (state, action) => {

            const index = state.users.findIndex(user => user.id === action.payload.user.id);

            state.users[index] = action.payload.user

            state.oneUser = null;

        },
        deleteUser:(state,action)=>{

            const index = state.users.findIndex(user => user.id = action.payload);

            console.log(action.payload)

            state.users.splice(index, 1);

        }

    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
    }
});


const {reducer: userReducer, actions: {createUser, userToUpdate,updateUser,deleteUser}} = userSlice;

const userActions = {
    getAll,
    createUser,
    userToUpdate,
    updateUser,
    updateUserById,
    deleteUser
}

export {
    userActions,
    userReducer
}

