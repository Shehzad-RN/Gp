import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: '',
        token: null
    }
    ,
    reducers: {
        handleAuthUserBio: (state, action) => {
            state.user = action.payload;
        },
        handleAuthTokenSession: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { handleAuthUserBio, handleAuthTokenSession } = authSlice.actions
export default authSlice.reducer