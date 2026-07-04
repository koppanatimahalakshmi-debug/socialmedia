import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from './../components/homepage/HomePage';
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import AddPost from "../components/posts/AddPost";

let RouteData = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "/addPost",
        element: <AddPost/>,
      },
    ]
  }
])
export default RouteData;