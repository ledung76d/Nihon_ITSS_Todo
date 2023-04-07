import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "../Components/Todo/TodoList";
import Music from "../Components/Music/music";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="music" element={<Music />} />
        </Routes>
    )
}

export default AppRoutes;
