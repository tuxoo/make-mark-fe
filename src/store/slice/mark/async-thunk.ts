import {createAsyncThunk} from "@reduxjs/toolkit";
import {Mark, markService} from "../../../service/mark.service";
import {ApiError} from "../../../model/error.model";

export const GET_MARKS_ACTION = 'marks/list';

export const fetchMarks = createAsyncThunk<Mark[], void, { rejectValue: ApiError }>(
    GET_MARKS_ACTION,
    async (_, thunkApi) => {
        try {
            const response = await markService.getMarks()
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.datat}
            return thunkApi.rejectWithValue(err)
        }
    });