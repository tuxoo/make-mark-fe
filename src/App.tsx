import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
