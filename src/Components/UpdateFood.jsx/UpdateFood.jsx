import PropTypes from "prop-types";
import swal from "sweetalert";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import bg from "../../assets/undraw_reminder_re_fe15.svg";
const UpdateFood = () => {
  const loadedFood = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    _id,
    foodname,
    foodimage,
    pickuplocation,
    expiredate,
    foodquantity,
    additionalnotes,
    foodstatus,
  } = loadedFood;
  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const foodname = form.get("foodname").trim();
    const foodstatus = form.get("foodstatus").trim();
    const foodimage = form.get("foodimage").trim();
    const pickuplocation = form.get("pickuplocation").trim();
    const expiredate = form.get("expiredate").trim();
    const foodquantity = form.get("foodquantity").trim();
    const additionalnotes = form.get("additionalnotes").trim();
    const updateFood = {
      foodname,
      foodimage,
      pickuplocation,
      expiredate,
      foodquantity,
      additionalnotes,
      foodstatus,
    };
    axiosSecure
      .patch(`/foodupdate/${_id}`, updateFood)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          swal("Nice!", "Food Updated Success!", "success");
          navigate("/manage-food");
        }
      })
      .catch(() => {
        swal("Opps!!", "Something Went Wrong Try Again", "error");
      });
  };
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 items-center">
        <div className="mt-5 col-span-1 px-24">
          <img src={bg} className="" alt="" />
        </div>
        <div className="col-span-1 px-24">
          <h3 className="font-bold text-lg lg:text-4xl logo">
            Food Update Form
          </h3>

          <form onSubmit={handleUpdateFood}>
            {/* Food Status  */}
            <div className="form-control mt-5">
              <label htmlFor="foodname">
                <span className="label-text">Food Status</span>
              </label>
              <input
                type="text"
                name="foodstatus"
                id="foodstatus"
                defaultValue={foodstatus}
                className="input input-bordered input-error"
              />
            </div>
            {/* Food Name  */}
            <div className="form-control mt-5">
              <label htmlFor="foodname">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="foodname"
                id="foodname"
                defaultValue={foodname}
                className="input input-bordered input-error"
              />
            </div>

            {/* Food Image  */}
            <div className="form-control mt-5">
              <label htmlFor="foodimage">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="url"
                name="foodimage"
                id="foodimage"
                defaultValue={foodimage}
                className="input input-bordered input-error"
              />
            </div>

            {/* Food Quantity  */}
            <div className="form-control mt-5">
              <label htmlFor="foodquantity">
                <span className="label-text">Food Quantity</span>
              </label>
              <input
                type="text"
                name="foodquantity"
                id="foodquantity"
                defaultValue={foodquantity}
                className="input input-bordered input-error"
              />
            </div>
            {/* Pickup Location  */}
            <div className="form-control mt-5">
              <label htmlFor="pickuplocation">
                <span className="label-text">Pickup Location</span>
              </label>
              <input
                type="text"
                id="pickuplocation"
                name="pickuplocation"
                defaultValue={pickuplocation}
                className="input input-bordered input-error"
              />
            </div>
            {/* Expire Date  */}
            <div className="form-control mt-5">
              <label htmlFor="expiredate">
                <span className="label-text">Expire Date</span>
              </label>
              <input
                type="datetime-local"
                id="expiredate"
                name="expiredate"
                defaultValue={expiredate}
                className="input input-bordered input-error"
              />
            </div>

            {/* Additional Notes  */}
            <div className="form-control mt-5">
              <label htmlFor="additionalnotes">
                <span className="label-text">Additional Notes</span>
              </label>
              <textarea
                name="additionalnotes"
                id="additionalnotes"
                defaultValue={additionalnotes}
                className="textarea textarea-bordered textarea-error"
              ></textarea>
            </div>

            <div className="form-control mt-5">
              <input
                type="submit"
                value="Update Food"
                className="btn btn-error"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
UpdateFood.propTypes = {
  food: PropTypes.object,
};
