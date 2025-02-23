import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import Tasks from "../pages/Tasks/Tasks";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../pages/UpdateTask/UpdateTask";

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
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
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
            },
            {
                path: "/updateTask",
                element: <UpdateTask></UpdateTask>
            }
        ]
    },
]);