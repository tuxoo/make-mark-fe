import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface MarkModalState {
    title: string
    text: string
}

const initialState: MarkModalState = {
    title: '',
    text: '',
}

const markModalSlice = createSlice({
    name: 'mark-modal',
    initialState,
    reducers: {
        changeTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        changeText(state, action: PayloadAction<string>) {
            state.text = action.payload
        },
        clear(state) {
            state.title = ''
            state.text = ''
        }
    }
})

export const markModalActions = markModalSlice.actions
export const markModalReducer = markModalSlice.reducer