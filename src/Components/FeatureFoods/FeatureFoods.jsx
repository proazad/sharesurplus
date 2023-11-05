import { Link } from "react-router-dom";
import food1 from "../../assets/featurefood01.jpg";
import food2 from "../../assets/featurefood02.png";
import food3 from "../../assets/featurefood03.jpg";
import food4 from "../../assets/featurefood04.jpg";
import food5 from "../../assets/featurefood05.jpg";
import food6 from "../../assets/featurefood06.webp";
import FeaturedFood from "./FeaturedFood";
const FeatureFoods = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-orange-600 logo">Featured Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
        <FeaturedFood food={food1} />
        <FeaturedFood food={food2} />
        <FeaturedFood food={food3} />
        <FeaturedFood food={food4} />
        <FeaturedFood food={food5} />
        <FeaturedFood food={food6} />
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
