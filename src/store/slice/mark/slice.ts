import {Mark} from "../../../service/mark.service";
import {ApiError} from "../../../model/error.model";
import {createSlice} from "@reduxjs/toolkit";
import {fetchMarks} from "./async-thunk";

interface MarkSliceState {
    marks: Mark[]
    error?: ApiError
    isLoading: boolean
}

const initialState: MarkSliceState = {
    marks: [],
    error: undefined,
    isLoading: false,
}

const marksSlice = createSlice({
    name: 'marks',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchMarks.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchMarks.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.marks = payload
            state.error = undefined
        })
        builder.addCase(fetchMarks.rejected, (state, {payload}) => {
            state.isLoading = false
            state.marks = []
            state.error = payload
        })
    }
})

const marksReducer = marksSlice.reducer
export default marksReducer