import {createSlice} from "@reduxjs/toolkit";
import {fetchYears} from "./async-thunk";
import {ApiError} from "../../../model/error.model";

export interface DailyState {
    year: number
    month: number
    day: number
    existYears: number[]
    isLoading: boolean
    error?: ApiError
}

const initialState: DailyState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    existYears: [],
    isLoading: false,
    error: undefined,
}

const dailySlice = createSlice({
    name: 'daily',
    initialState,
    reducers: {
        setYear(state, {payload}) {
            state.year = payload
        },
        setMonth(state, {payload}) {
            state.month = payload
        },
        setDay(state, {payload}) {
            state.day = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchYears.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchYears.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.existYears = payload
        })
        builder.addCase(fetchYears.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
    }
})

export const dailyActions = dailySlice.actions
export const dailyReducer = dailySlice.reducer