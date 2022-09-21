import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Slide, ToastContainer} from "react-toastify";
import Login from "./page/Login";
import {injectStyle} from "react-toastify/dist/inject-style";
import Daily from "./page/Daily";
import {Box} from "@chakra-ui/react";
import Calendar from "./page/Calendar";
import Dashboard from "./page/Dashboard";

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
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/calendar' element={<Calendar/>}/>
                    <Route path='/daily' element={<Daily/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
            </Box>
        </>
    );
}

export default App;
