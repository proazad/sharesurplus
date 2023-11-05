import { createBrowserRouter } from "react-router-dom";
import Error404 from "../LayOut/Error404";
import MainLayout from "../LayOut/MainLayout";
import AddFood from "../Page/AddFood/AddFood";
import AvailableFood from "../Page/AvailableFood/AvailableFood";
import Home from "../Page/Home/Home";
import ManageFood from "../Page/ManageFood/ManageFood";
import MyFoodRequest from "../Page/MyFoodRequest/MyFoodRequest";
import Signin from "../Page/Registration/Signin";
import Registration from "../Page/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-food",
        element: <AddFood />,
      },
      {
        path: "/available-food",
        element: <AvailableFood />,
      },
      {
        path: "/manage-food",
        element: <ManageFood />,
      },
      {
        path: "/food-request",
        element: <MyFoodRequest />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Registration />,
      },
    ],
  },
]);
export default router;
