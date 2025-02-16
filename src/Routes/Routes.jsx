import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Count from "../Pages/Home/Home/Count";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/count",
        element: <Count />, // Home Page
      },
    ],
  },
]);