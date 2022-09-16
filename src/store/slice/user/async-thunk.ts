import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiError} from "../../../model/error.model";
import {User} from "../../../model/user.model";
import {authService, SignInRequest, SignUpRequest} from "../../../service/user.service";
import {localStorageService} from "../../../service/local-storage.service";

export const SIGN_IN_ACTION = 'users/sign-in'
export const SIGN_UP_ACTION = 'users/sign-up'
export const GET_PROFILE_ACTION = 'users/profile'

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

const getProfile = createAsyncThunk<User, void, { rejectValue: ApiError }>(
    GET_PROFILE_ACTION,
    async (_, thunkApi) => {
        try {
            const response = await authService.getProfile()
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    }
)

export {signIn, signUp, getProfile}