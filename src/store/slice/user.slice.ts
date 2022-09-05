import {ApiError} from "../../model/error.model";
import {User} from "../../model/user.model";
import {localStorageService} from "../../service/local-storage.service";
import {authService, SignInRequest, SignUpRequest} from "../../service/user.service";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

interface UserSliceState {
    isAuthenticated: boolean
    isLoading: boolean
    error?: ApiError
    user?: User
}

const initialState: UserSliceState = {
    isAuthenticated: false,
    isLoading: false,
    error: undefined,
    user: undefined,
}

export const SIGN_IN_ACTION = 'users/sign-in'
export const SIGN_UP_ACTION = 'users/sign-up'

const signIn = createAsyncThunk<User, SignInRequest, { rejectValue: ApiError }>(
    SIGN_IN_ACTION,
    async (request: SignInRequest, thunkApi) => {
        try {
            const response = await authService.signIn(request)
            localStorageService.setAccessToken(response.data.accessToken)
            return response.data.user
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    }
)

const signUp = createAsyncThunk<void, SignUpRequest, { rejectValue: ApiError }>(
    SIGN_UP_ACTION,
    async (request: SignUpRequest, thunkApi) => {
        try {
            await authService.signUp(request)
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signIn.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.isAuthenticated = true;
            state.user = payload;
            state.isLoading = true;
            toast.success("User Login Successfully");
        });
        builder.addCase(signIn.rejected, (state, {payload}) => {
            state.isAuthenticated = false;
            state.user = undefined
            state.isLoading = false;
            state.error = payload;
            toast.error("Something went wrong")
        });
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUp.fulfilled, (state, {payload}) => {
            state.isAuthenticated = true;
            state.isLoading = false;
            toast.success("User Register Successfully");
        });
        builder.addCase(signUp.rejected, (state, {payload}) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error = payload;
            toast.error("Something went wrong")
        });
    },
});

export default userSlice.reducer;
export {signIn, signUp};