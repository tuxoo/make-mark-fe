import {createAsyncThunk} from "@reduxjs/toolkit";
import {MarkForm, markService, MarkSlim} from "../../../service/mark.service";
import {ApiError} from "../../../model/error.model";
import {Page} from "../../../model/pagination.model";

export const ADD_MARK_ACTION = 'mark/add';
export const EDIT_MARK_ACTION = 'mark/edit';
export const GET_DAILY_MARKS_ACTION = 'marks/list';
export const GET_MONTHLY_MARKS_ACTION = 'marks/page';
export const DELETE_MARK_ACTION = 'mark/delete';

const addMark = createAsyncThunk<MarkSlim, MarkForm, { rejectValue: ApiError }>(
    ADD_MARK_ACTION,
    async (mark: MarkForm, thunkApi) => {
        try {
            const response = await markService.addMark(mark)
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.datat}
            return thunkApi.rejectWithValue(err)
        }
    }
)

const editMark = createAsyncThunk<MarkSlim, { id: string, mark: MarkForm }, { rejectValue: ApiError }>(
    EDIT_MARK_ACTION,
    async ({id, mark}, thunkApi) => {
        try {
            const response = await markService.editMark(id, mark)
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    });

const fetchDailyMarks = createAsyncThunk<MarkSlim[], { year: number, month: number, day: number }, { rejectValue: ApiError }>( // TODO: remove any
    GET_DAILY_MARKS_ACTION,
    async ({year, month, day}, thunkApi) => {
        try {
            const response = await markService.getDailyMarks(year, month, day)
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.datat}
            return thunkApi.rejectWithValue(err)
        }
    });

const fetchMonthlyMarks = createAsyncThunk<Page<MarkSlim>, { year: number, month: number, page: number, size: number, sort: string, sortBy: 'asc' | 'desc' }, { rejectValue: ApiError }>(
    GET_MONTHLY_MARKS_ACTION,
    async ({year, month, page, size, sort, sortBy}, thunkApi) => {
        try {
            const response = await markService.getMonthlyMarks(year, month, {page, size, sort, sortBy})
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.datat}
            return thunkApi.rejectWithValue(err)
        }
    }
)

const deleteMark = createAsyncThunk<string, string, { rejectValue: ApiError }>(
    DELETE_MARK_ACTION,
    async (id: string, thunkApi) => {
        try {
            const response = await markService.deleteMark(id)
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}
            return thunkApi.rejectWithValue(err)
        }
    }
)

export {addMark, editMark, fetchDailyMarks, fetchMonthlyMarks, deleteMark}