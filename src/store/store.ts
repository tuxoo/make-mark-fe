import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createBrowserHistory} from 'history';
import {setupListeners} from "@reduxjs/toolkit/query";
import {connectRouter, routerMiddleware} from "connected-react-router";
import loginReducer from "./slice/user/slice";
import marksReducer from "./slice/mark/slice";
import {markModalReducer} from "./slice/mark-model/slice";
import {dailyReducer} from "./slice/daily/slice";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    loginReducer,
    marksReducer,
    markModalReducer,
    dailyReducer,
    router: connectRouter(history)
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(routerMiddleware(history))
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>