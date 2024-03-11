import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: "",
        isLogin : false
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
            state.isLogin = true;
        },
        updateUsername: (state, action) => {
            state.username = action.payload
        }
    }
})

export const {setUsername, updateUsername} = authSlice.actions

export default authSlice.reducer;