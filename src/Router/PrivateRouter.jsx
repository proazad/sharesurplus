import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <>
        <div className="flex h-96 w-full items-center justify-center">
          <span className="loading loading-lg loading-spinner text-secondary"></span>
        </div>
      </>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
