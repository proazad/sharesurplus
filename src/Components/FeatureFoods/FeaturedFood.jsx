import { Link } from "react-router-dom";
import avater from "../../assets/azad.jpg";
import PropTypes from "prop-types";
const FeaturedFood = ({ food }) => {
  return (
    <div className="shadow p-3 rounded-lg">
      <img
        src={food}
        alt=""
        className="rounded-lg h-80 w-full"
        draggable="false"
      />
      <h2 className="text-2xl my-2 logo">Gourmet Donuts</h2>
      <div className="flex gap-5 items-center">
        <div className="avatar online ">
          <div className="w-10 rounded-full">
            <img src={avater} />
          </div>
        </div>
        <h2 className="text-lg font-semibold">Azad Hossain</h2>
      </div>
      <div className="my-3">
        <div className="flex gap-10">
          <h2 className="text-lg">
            <span className="font-medium">Food Quantity:</span> 25 person
          </h2>
          <h2 className="text-lg">
            <span className="font-medium">Expire in:</span> 3:00pm 10/11/2023
          </h2>
        </div>
        <div className="flex gap-10">
          <h2 className="text-lg">
            <span className="font-medium">Pickup Location:</span> Notun
            Bazar,Badda, Dhaka-1207
          </h2>
        </div>
        <div className="flex gap-10 mb-4">
          <h2 className="text-lg">
            <span className="font-medium">Note:</span> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odit, saepe.
          </h2>
        </div>
        <Link to="/food/:id">
          <button className="btn bg-orange-500 text-white hover:text-orange-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFood;
FeaturedFood.propTypes = {
  food: PropTypes.string,
};
