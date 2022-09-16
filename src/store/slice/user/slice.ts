import {ApiError} from "../../../model/error.model";
import {User} from "../../../model/user.model";
import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {signIn, signUp} from "./async-thunk";

interface UserSliceState {
    isAuthenticated: boolean
    isRegistered: boolean
    isLoading: boolean
    error?: ApiError
    user?: User
}

const initialState: UserSliceState = {
    isAuthenticated: false,
    isRegistered: false,
    isLoading: false,
    error: undefined,
    user: undefined,
}

const loginSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signIn.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.isAuthenticated = true;
            state.user = payload;
            state.isLoading = true;
        })
        builder.addCase(signIn.rejected, (state, {payload}) => {
            state.isAuthenticated = false;
            state.user = undefined
            state.isLoading = false;
            state.error = payload;
            toast.error("Something went wrong")
        })
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(signUp.fulfilled, state => {
            state.isRegistered = true;
            state.isLoading = false;
        })
        builder.addCase(signUp.rejected, (state, {payload}) => {
            state.isRegistered = false;
            state.isLoading = false;
            state.error = payload;
            toast.error("Something went wrong")
        })
    }
})

const loginReducer = loginSlice.reducer
export default loginReducer