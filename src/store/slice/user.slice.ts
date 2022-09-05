import {ApiError} from "../../model/error.model";
import {User} from "../../model/user.model";
import {localStorageService} from "../../service/local-storage.service";
import {authService, SignInRequest, SignUpRequest} from "../../service/user.service";
import {createAsyncThunk} from "@reduxjs/toolkit";

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