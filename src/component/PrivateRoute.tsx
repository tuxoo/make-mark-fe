import React from "react";
import {localStorageService} from "../service/local-storage.service";
import Login from "../page/Login";

const PrivateRoute = ({children}: { children: any }) => {
    const token = localStorageService.getAccessToken()
    return token ? children : <Login/>
}

export default PrivateRoute