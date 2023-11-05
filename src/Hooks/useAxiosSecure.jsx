// import axios from "axios";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:5000",
//   withCredentials: true,
// });
// const useAxiosSecure = () => {
//   const { userLogOut } = useAuth();
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios.interceptors.response.use(
//       (res) => {
//         return res;
//       },
//       (error) => {
//         if (error.response.status === 401 || error.response.status === 403) {
//           swal("Logout the user", "success");
//           userLogOut()
//             .then(() => {
//               navigate("/login");
//             })
//             .catch((error) => {
//               swal(error.message, "error");
//             });
//         }
//       }
//     );
//   }, [navigate,userLogOut]);
//   return axiosSecure;
// };

// export default useAxiosSecure;
