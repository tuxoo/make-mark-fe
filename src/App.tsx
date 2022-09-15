import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Slide, ToastContainer} from "react-toastify";
import Login from "./page/Login";
import {injectStyle} from "react-toastify/dist/inject-style";
import Marks from "./page/Marks";

function App() {
    injectStyle()

    return (
        <>
            <ToastContainer
                draggable={false}
                transition={Slide}
                autoClose={1000}
            />
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/marks' element={<Marks/>}/>
            </Routes>
        </>
    );
}

export default App;
