import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import FeaturedFood from "../../Components/FeatureFoods/FeaturedFood";

const ManageFood = () => {
  document.title = "shareSurplus | Manage Food";
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const url = `/myfoods?email=${user.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure, url]);
  return (
    <div>
      <h1 className="text-4xl">Manage My Foods:{foods.length}</h1>
      {foods.length === 0 ? (
        <div className="flex h-96 w-full items-center justify-center">
          <h2 className="text-2xl">No Data Found!</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
          {foods?.map((food) => (
            <FeaturedFood key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageFood;
