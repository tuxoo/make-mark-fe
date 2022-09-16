import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Slide, ToastContainer} from "react-toastify";
import Login from "./page/Login";
import {injectStyle} from "react-toastify/dist/inject-style";
import Marks from "./page/Marks";
import Header from "./component/Header";
import {Box} from "@chakra-ui/react";

function App() {
    injectStyle()

    return (
        <>
            <ToastContainer
                draggable={false}
                transition={Slide}
                autoClose={1000}
            />
            <Box bgGradient={'linear(to-b, purple.200, blue.600)'} minWidth='1000px'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/marks' element={<Marks/>}/>
                </Routes>
            </Box>
        </>
    );
}

export default App;
