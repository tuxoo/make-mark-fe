import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./page/Login";

function App() {
    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </>
    );
}

export default App;
