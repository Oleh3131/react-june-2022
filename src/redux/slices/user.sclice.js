import {createSlice} from "@reduxjs/toolkit";


const initialState={

    users:[],
    oneUser:null,
    loading:false,
    error:null

};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser:(state,action)=>{
            state.oneUser=action.payload
        }
    }
});


const {reducer:userReducer,actions:{getAll,setCurrentUser}} = userSlice;

const userActions={
    getAll,
    setCurrentUser
}

export {
    userReducer,
    userActions
}