import React, {useContext} from 'react';
import {AuthContext} from "../Context/index.js";
import {publicRoutes} from "./routes.js";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext);
    return (
        isAuthorized
        ? <Routes>
                {publicRoutes.map(route =>(
                    <Route path={route.path} key={route.path} element={<route.component/>}/>
                ))}
         </Routes>
        : <div></div>

    );
};

export default AppRouter;