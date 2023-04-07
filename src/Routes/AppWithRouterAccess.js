import React from "react";
import AppBar from "../Components/layouts/Appbar";
import AppRoutes from "./AppRoutes";
import { Router, Link, Route, Routes } from "react-router-dom";
import TodoList from "../Components/Todo/TodoList";

const AppWithRouterAccess = () => {
    return (
        <>
            <AppBar />
            <AppRoutes />
        </>
    )
}

export default AppWithRouterAccess;
