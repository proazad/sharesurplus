import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Profile = () => {
  const { user, loading } = useAuth();
  const axiosSeceure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [otherFoodRequest, setotherFoodRequest] = useState([]);

  useEffect(() => {
    axiosSeceure.get(`/myfoods?email=${user.email}`).then((res) => {
      setFoods(res.data);
      const requestFoods = res?.data.filter(
        (food) => food.foodrequesttrack === true
      );
      setotherFoodRequest(requestFoods);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosSeceure, user.email]);

  if (loading) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <span className="loading loading-lg loading-spinner text-secondary"></span>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="col-span-1">
          <div>
            <img
              src={user.photoURL}
              className="w-40 rounded-md"
              alt={user?.displayName}
            />
            <p className="text-2xl logo my-2">{user?.displayName}</p>
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="text-2xl logo font-semibold">
            Your Added All Foods:{" "}
            <Link className="text-blue-500" to="/manage-food">
              {foods.length}
            </Link>
          </h1>
          <h1 className="text-2xl logo font-semibold">
            Request in Your Foods:{" "}
            <Link className="text-blue-500" to="/request-pendinglist">
              {otherFoodRequest.length}
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
