import {MarkSlim} from "../../../service/mark.service";
import {ApiError} from "../../../model/error.model";
import {createSlice} from "@reduxjs/toolkit";
import {addMark, deleteMark, editMark, fetchDailyMarks, fetchMonthlyMarks} from "./async-thunk";

interface MarkSliceState {
    marks: MarkSlim[]
    totalPages: number
    page: number
    size: number
    sort: string
    sortBy: 'desc' | 'asc'
    number: number
    numberOfElements: number
    error?: ApiError
    isLoading: boolean
}

const initialState: MarkSliceState = {
    marks: [],
    totalPages: 1,
    page: 0,
    size: 20,
    sort: 'id',
    sortBy: 'desc',
    number: 0,
    numberOfElements: 0,
    error: undefined,
    isLoading: false,
}

const marksSlice = createSlice({
    name: 'marks',
    initialState,
    reducers: {
        setPage(state, {payload}) {
            state.page = payload
        },
        setSize(state, {payload}) {
            state.size = payload
        },
        setSort(state, {payload}) {
            state.sort = payload
        },
        setSortBy(state, {payload}) {
            state.sortBy = payload
        }
    },
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
        builder.addCase(fetchDailyMarks.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchDailyMarks.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.marks = payload
            state.error = undefined
        })
        builder.addCase(fetchDailyMarks.rejected, (state, {payload}) => {
            state.isLoading = false
            state.marks = []
            state.error = payload
        })
        builder.addCase(fetchMonthlyMarks.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchMonthlyMarks.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.marks = payload.content
            state.totalPages = payload.totalPages
            state.error = undefined
        })
        builder.addCase(fetchMonthlyMarks.rejected, (state, {payload}) => {
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

export const marksActions = marksSlice.actions
export const marksReducer = marksSlice.reducer