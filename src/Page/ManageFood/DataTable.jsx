import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineFundView } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const DataTable = ({ foods, handleFoodDelete }) => {
  return (
    <table className="table table-zebra lg:table-lg">
      <thead>
        <tr className="text-center">
          <th>SL</th>
          <th>Image</th>
          <th>Name</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {foods?.map((food, index) => (
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
            <td className="flex gap-4 justify-end">
              {food.foodrequesttrack === true && (
                <Link
                  to={`/manage/${food._id}`}
                  className="btn btn-sm btn-outline btn-primary"
                  title="Manage Foods"
                >
                  <AiOutlineFundView className="text-2xl" />
                </Link>
              )}

              <Link
                to={`/foodupdate/${food._id}`}
                className="btn btn-sm btn-outline btn-info"
                title="Update"
              >
                <FaEdit className="text-2xl" />
              </Link>
              <button
                className="btn btn-sm btn-outline btn-error"
                title="Delete"
                onClick={() => handleFoodDelete(food._id)}
              >
                <AiOutlineDelete className="text-2xl" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
DataTable.propTypes = {
  foods: PropTypes.array,
  handleFoodDelete: PropTypes.func,
};
