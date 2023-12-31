import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import FeaturedFood from "./FeaturedFood";
const FeatureFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [featuredFoods, setFeaturedFoods] = useState([]);
  useEffect(() => {
    axiosSecure.get("/foods").then((res) => {
      const available = res.data.filter(
        (item) => item.foodstatus === "available"
      );
      const fiterbyFoodQuantity = available.sort(
        (item1, item2) => item2.foodquantity - item1.foodquantity
      );
      setFeaturedFoods(fiterbyFoodQuantity.slice(0, 6));
    });
  }, [axiosSecure]);
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-600 logo px-2 lg:px-0 text-center lg:text-left">
        Featured Food
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
        {featuredFoods?.map((food) => (
          <FeaturedFood key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center my-5">
        <Link
          to="/available-food"
          className="btn bg-orange-600 text-white hover:text-orange-600"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default FeatureFoods;
