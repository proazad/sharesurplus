import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useCurrentDateTime from "../../Hooks/useCurrentDateTime";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
const FoodRequstForm = ({ food }) => {
  const { user } = useAuth();
  const currentDateTime = useCurrentDateTime();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleFoodRequest = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const additionalnotes = form.get("additionalnotes");
    const donationmoney = form.get("donationmoney");
    const foodRequest = {
      foodid: food._id,
      foodname: food.foodname,
      foodimage: food.foodimage,
      donoremail: food.donoremail,
      donorname: food.donorname,
      foodstatus: food.foodstatus,
      useremail: user.email,
      username: user.displayName,
      userimage: user.photoURL,
      pickuplocation: food.pickuplocation,
      expiredate: food.expiredate,
      requesttime: currentDateTime,
      additionalnotes,
      donationmoney,
    };
    axiosSecure
      .post("/rqFoods", foodRequest)
      .then((res) => {
        if (res.data.insertedId) {
          axiosSecure
            .patch(`/foodrequesttrack/${food._id}`, {
              foodrequesttrack: true,
            })
            .then((res) => {
              if (res.data) {
                console.log(res.data);
                swal("Cool!", "Food Request Submited!", "success");
                navigate("/food-request");
              }
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            <span className="text-2xl">✕</span>
          </button>
        </form>
        <h3 className="font-bold text-lg">Food Request Form</h3>
        <form onSubmit={handleFoodRequest}>
          {/* Additional Notes  */}
          <div className="form-control mt-5">
            <label htmlFor="additionalnotes">
              <span className="label-text">Additional Notes</span>
            </label>
            <textarea
              name="additionalnotes"
              id="additionalnotes"
              className="textarea textarea-bordered textarea-error"
              required
            ></textarea>
          </div>
          {/* Donation Money  */}
          <div className="form-control mt-5">
            <label htmlFor="donationmoney">
              <span className="label-text">Donation Money</span>
            </label>
            <input
              type="text"
              name="donationmoney"
              id="donationmoney"
              className="input input-bordered input-error"
              required
            />
          </div>
          <div className="form-control mt-5">
            <input
              type="submit"
              className="btn btn-error"
              value="Request Submit"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default FoodRequstForm;
FoodRequstForm.propTypes = {
  food: PropTypes.object,
};
