import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createBrowserHistory} from 'history';
import userReducer from './slice/user.slice';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    userReducer
})

export const store = configureStore({
    reducer: rootReducer
});