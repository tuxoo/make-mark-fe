import {createAsyncThunk} from "@reduxjs/toolkit";
import {MarkForm, markService, MarkSlim} from "../../../service/mark.service";
import {ApiError} from "../../../model/error.model";

export const ADD_MARK_ACTION = 'mark/add';
export const EDIT_MARK_ACTION = 'mark/edit';
export const GET_MARKS_ACTION = 'marks/list';
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

const fetchMarks = createAsyncThunk<MarkSlim[], Date, { rejectValue: ApiError }>( // TODO: remove any
    GET_MARKS_ACTION,
    async (date, thunkApi) => {
        try {
            console.log(date.getFullYear(), date.getMonth(), date.getDate())
            const response = await markService.getMarks(date.getFullYear(), date.getMonth() + 1, date.getDate())
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.datat}
            return thunkApi.rejectWithValue(err)
        }
    });

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

export {addMark, editMark, fetchMarks, deleteMark}