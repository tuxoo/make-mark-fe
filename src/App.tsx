import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Login from "./page/Login";
import Header from "./component/Header";

function App() {
    return (
        <>
            <ToastContainer/>
            <Header/>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </>
    );
}

export default App;
