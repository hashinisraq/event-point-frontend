import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Shared/NotFound/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

export default Router;
