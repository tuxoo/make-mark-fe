import {MarkSlim} from "../../../service/mark.service";
import {ApiError} from "../../../model/error.model";
import {createSlice} from "@reduxjs/toolkit";
import {addMark, deleteMark, editMark, fetchMarks} from "./async-thunk";

interface MarkSliceState {
    marks: MarkSlim[]
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
        builder.addCase(addMark.pending, state => {
            state.isLoading = true
        })
        builder.addCase(addMark.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.marks = [...state.marks, payload]
        })
        builder.addCase(addMark.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
        builder.addCase(editMark.pending, state => {
            state.isLoading = true
        })
        builder.addCase(editMark.fulfilled, (state, {payload}) => {
            state.marks = state.marks.map(mark => {
                if (mark.id === payload.id) {
                    return payload
                }
                return mark
            })
        })
        builder.addCase(editMark.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
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
        builder.addCase(deleteMark.pending, state => {
            state.isLoading = true
        })
        builder.addCase(deleteMark.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.marks = state.marks.filter(mark => mark.id !== payload)
            state.error = undefined
        })
        builder.addCase(deleteMark.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
    }
})

const marksReducer = marksSlice.reducer
export default marksReducer