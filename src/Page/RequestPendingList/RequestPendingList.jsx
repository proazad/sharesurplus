import { useEffect, useState } from "react";
import { AiOutlineFundView } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const RequestPendingList = () => {
  const { user, loading } = useAuth();
  const axiosSeceure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axiosSeceure.get(`/myfoods?email=${user.email}`).then((res) => {
      setFoods(res.data);
      const requestFoods = res?.data.filter(
        (food) => food.foodrequesttrack === true
      );
      setFoods(requestFoods);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosSeceure, user.email]);
  const pendings = foods.filter((foods) => foods.foodrequesttrack === true);
  if (loading) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <span className="loading loading-lg loading-spinner text-secondary"></span>
      </div>
    );
  }
  return (
    <div className="my-10">
      <h1 className="text-4xl logo font-bold">
        Pending List : {pendings.length}
      </h1>
      <table className="table table-zebra lg:table-lg">
        <thead>
          <tr>
            <th>SL</th>
            <th>Image</th>
            <th>Name</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendings?.map((food, index) => (
            <tr key={food._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={food.foodimage}
                  className="w-16 rounded-md"
                  alt={food.foodname}
                />
              </td>
              <td>{food.foodname}</td>
              <td>{food.expiredate}</td>
              <td>
                {food?.foodstatus === "available" ? (
                  <span className="text-yellow-600 capitalize font-semibold">
                    {food?.foodstatus}
                  </span>
                ) : (
                  <span className="text-green-600 capitalize font-semibold">
                    {food?.foodstatus}
                  </span>
                )}
              </td>
              <td className="">
                {food.foodrequesttrack === true && (
                  <Link
                    to={`/manage/${food._id}`}
                    className="btn btn-sm btn-outline btn-primary"
                    title="Manage Foods"
                  >
                    <AiOutlineFundView className="text-2xl" />
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestPendingList;
