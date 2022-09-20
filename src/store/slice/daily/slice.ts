import {createSlice} from "@reduxjs/toolkit";

export interface DailyState {
    year: number
    month: number
    day: number
}

const initialState: DailyState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
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
    }
})

export const dailyActions = dailySlice.actions
export const dailyReducer = dailySlice.reducer