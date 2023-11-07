import { createBrowserRouter } from "react-router-dom";
import UpdateFood from "../Components/UpdateFood.jsx/UpdateFood";
import Error404 from "../LayOut/Error404";
import MainLayout from "../LayOut/MainLayout";
import AddFood from "../Page/AddFood/AddFood";
import AvailableFood from "../Page/AvailableFood/AvailableFood";
import Home from "../Page/Home/Home";
import ManageFood from "../Page/ManageFood/ManageFood";
import MyFoodRequest from "../Page/MyFoodRequest/MyFoodRequest";
import Registration from "../Page/Registration/Registration";
import Signin from "../Page/Registration/Signin";
import SingleFoodView from "../Page/SingleFoodView/SingleFoodView";
import PrivateRouter from "./PrivateRouter";
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
        element: (
          <PrivateRouter>
            <AddFood />
          </PrivateRouter>
        ),
      },
      {
        path: "/available-food",
        element: <AvailableFood />,
      },
      {
        path: "/manage-food",
        element: (
          <PrivateRouter>
            <ManageFood />
          </PrivateRouter>
        ),
      },
      {
        path: "/foodupdate/:id",
        element: (
          <PrivateRouter>
            <UpdateFood />
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          return fetch(
            `http://localhost:5000/foods/${params.id}`
          );
        },
      },
      {
        path: "/foods/:id",
        element: (
          <PrivateRouter>
            <SingleFoodView />
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          return fetch(
            `http://localhost:5000/foods/${params.id}`
          );
        },
      },
      {
        path: "/food-request",
        element: (
          <PrivateRouter>
            <MyFoodRequest />
          </PrivateRouter>
        ),
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
