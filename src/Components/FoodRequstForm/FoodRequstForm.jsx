import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useCurrentDateTime from "../../Hooks/useCurrentDateTime";
const FoodRequstForm = ({ food }) => {
  const { user } = useAuth();
  const currentDateTime = useCurrentDateTime();
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
      useremail: user.email,
      username: user.displayName,
      pickuplocation: food.pickuplocation,
      expiredate: food.expiredate,
      requesttime: currentDateTime,
      additionalnotes,
      donationmoney,
    };
    console.log(foodRequest);
  };
  return (
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
        />
      </div>
      <div className="form-control mt-5">
        <input type="submit" className="btn btn-error" value="Request Submit" />
      </div>
    </form>
  );
};

export default FoodRequstForm;
FoodRequstForm.propTypes = {
  food: PropTypes.object,
};
