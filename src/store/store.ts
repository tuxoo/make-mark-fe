import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createBrowserHistory} from 'history';
import userReducer from './slice/user.slice';
import {setupListeners} from "@reduxjs/toolkit/query";
import {connectRouter, routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    userReducer,
    router: connectRouter(history)
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(routerMiddleware(history))
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>