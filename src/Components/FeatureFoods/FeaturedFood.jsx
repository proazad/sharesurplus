import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const FeaturedFood = ({ food }) => {
  const {
    _id,
    foodname,
    foodimage,
    donorname,
    donorimage,
    pickuplocation,
    expiredate,
    additionalnotes,
    foodstatus,
    foodquantity,
  } = food;
  return (
    <motion.div
      className="shadow p-3 rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, backgroundColor: "#FFA500" }}
    >
      <div className="relative">
        <img
          src={foodimage}
          alt={foodname}
          className="rounded-lg h-70 md:h-48 lg:h-80 w-full"
          draggable="false"
        />
        <span className="absolute top-2 right-5  px-2 py-1 capitalize bg-orange-500 text-white">
          {foodstatus}
        </span>
      </div>

      <h2 className="text-2xl my-2 logo">{foodname}</h2>
      <div className="flex gap-5 items-center">
        <div className="avatar online ">
          <div className="w-10 rounded-full">
            <img src={donorimage} alt={donorname} />
          </div>
        </div>
        <h2 className="text-lg font-semibold">{donorname}</h2>
      </div>
      <div className="my-3">
        <div className="flex gap-10">
          <h2 className="text-lg">
            <span className="font-medium">Food Quantity:</span> {foodquantity}{" "}
            person
          </h2>
          <h2 className="text-lg">
            <span className="font-medium">Expire in:</span> {expiredate}
          </h2>
        </div>
        <div className="flex gap-10">
          <h2 className="text-lg">
            <span className="font-medium">Pickup Location:</span>{" "}
            {pickuplocation}
          </h2>
        </div>
        <div className="flex gap-10 mb-4">
          <h2 className="text-lg">
            <span className="font-medium">Note:</span> {additionalnotes}
          </h2>
        </div>
        <Link to={`/foods/${_id}`}>
          <button className="btn bg-orange-500 text-white hover:text-orange-600">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

FeaturedFood.propTypes = {
  food: PropTypes.object,
};

export default FeaturedFood;
