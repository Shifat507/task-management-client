import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import Tasks from "../pages/Tasks/Tasks";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addTask",
                element: <AddTask></AddTask>
            },
            {
                path: "/tasks",
                element: <Tasks></Tasks>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }
        ]
    },
]);