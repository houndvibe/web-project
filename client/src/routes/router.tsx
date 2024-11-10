import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>ErrorPage</>,
    children: [
      {
        path: "users",
        element: <>users</>,
        errorElement: <>ErrorPage</>,
      },
      {
        path: "users/:userId",
        element: <>users/:userId</>,
        errorElement: <>ErrorPage</>,
      },
    ],
  },
]);

export default router;
