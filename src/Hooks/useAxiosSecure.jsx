import axios from "axios";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://sharesurplus-server.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          userLogOut().then(() => {
            return (
              <Navigate
                state={location.pathname}
                to="/signin"
                replace
              ></Navigate>
            );
          });
          swal("Sorry!", "Your Session Expired, Please Sign in ", "error");
        }
      }
    );
  }, [navigate, userLogOut, location.pathname]);
  return axiosSecure;
};

export default useAxiosSecure;
