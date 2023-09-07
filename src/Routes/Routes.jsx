import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Tasks from "../Components/Pages/Tasks/Tasks";
import AddTask from "../Components/Pages/AddTask/AddTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/addTask',
        element:<AddTask></AddTask>
      },
      {
        path:'/task',
        element:<Tasks></Tasks>
      }
    ],
  },
]);
