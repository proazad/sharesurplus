import { Link } from "react-router-dom";
import FeaturedFood from "./FeaturedFood";
import axios from "axios";
import { useEffect, useState } from "react";
const FeatureFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/foods").then((res) => {
      setFeaturedFoods(res.data);
    });
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-600 logo">Featured Food</h2>
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
