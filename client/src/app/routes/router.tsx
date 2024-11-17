import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AuthorisedRoutes from "../../pages/AuthorisedRoutes/AuthorisedRoutes";
import LogInPage from "../../pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "login",
    element: <LogInPage />,
  },
  {
    path: "/",
    element: <AuthorisedRoutes />,
    errorElement: <>ErrorPage</>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <>UsersPage</>,
        errorElement: <>ErrorPage</>,
      },
      {
        path: "users/:userId",
        element: <>UserItemPage</>,
        errorElement: <>ErrorPage</>,
      },
    ],
  },
]);

export default router;