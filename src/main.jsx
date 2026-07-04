import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./content/AuthContext";
import { RouterProvider } from "react-router-dom";
import RouteData from './routes/RouteData';
import PostProvider from "./content/PostContext";

createRoot(document.getElementById("root")).render(
   <PostProvider>
     <AuthProvider>
        <RouterProvider router={RouteData}>
            <App/>
        </RouterProvider>
    </AuthProvider>
   </PostProvider>
);
