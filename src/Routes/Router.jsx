import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../components/LoginRegister/Login";
import Register from "../components/LoginRegister/Register";
import ChefLayout from "../layouts/ChefLayout";
import Home from "../components/Home/Home";
import Blog from "../components/Blog/Blog";
import ChefDetails from "../components/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <ChefLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "chefDetails/:id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://italian-chef-hub-server-pieash9.vercel.app/allData/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
