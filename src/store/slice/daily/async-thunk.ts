import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiError} from "../../../model/error.model";
import {itemService} from "../../../service/item.service";

export const GET_YEARS_ACTION = 'items/years';

const fetchYears = createAsyncThunk<number[], void, { rejectValue: ApiError }>(
    GET_YEARS_ACTION,
    async (_, thunkApi) => {
        try {
            const response = await itemService.fetchYears()
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    }
)

export {fetchYears}