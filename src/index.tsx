import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = extendTheme({
    fonts: {
        body: `'Raleway', sans-serif,`
    }
})


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App/>
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
)
;
