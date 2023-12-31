import { createBrowserRouter } from "react-router-dom";
import UpdateFood from "../Components/UpdateFood.jsx/UpdateFood";
import Error404 from "../LayOut/Error404";
import MainLayout from "../LayOut/MainLayout";
import AddFood from "../Page/AddFood/AddFood";
import AvailableFood from "../Page/AvailableFood/AvailableFood";
import Home from "../Page/Home/Home";
import ManageFood from "../Page/ManageFood/ManageFood";
import ManageSingleFood from "../Page/MangeSingleFood/ManageSingleFood";
import MyFoodRequest from "../Page/MyFoodRequest/MyFoodRequest";
import Profile from "../Page/Profile/Profile";
import Registration from "../Page/Registration/Registration";
import Signin from "../Page/Registration/Signin";
import RequestPendingList from "../Page/RequestPendingList/RequestPendingList";
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
          return fetch(`https://sharesurplus-server.vercel.app/foods/${params.id}`);
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
          return fetch(`https://sharesurplus-server.vercel.appserver.vercel.app/foods/${params.id}`);
        },
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRouter>
            <ManageSingleFood />
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          return fetch(`https://sharesurplus-server.vercel.app/foods/${params.id}`);
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
      {
        path: "/request-pendinglist",
        element: (
          <PrivateRouter>
            <RequestPendingList />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
