import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import img from "../../assets/asda.webp";
import swal from "sweetalert";
const AddFood = () => {
  document.title = "shareSurplus | Add Food";
  const { user } = useAuth();
  const handleAddNewFood = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const foodname = form.get("foodname");
    const foodimage = form.get("foodimage");
    const donoremail = user.email;
    const donorname = user.displayName;
    const donorimage = user.photoURL;
    const pickuplocation = form.get("pickuplocation");
    const foodquantity = form.get("foodquantity");
    const expiredate = form.get("expiredate");
    const additionalnotes = form.get("additionalnotes");
    const foodstatus = "available";

    const food = {
      foodname,
      foodimage,
      donoremail,
      donorname,
      donorimage,
      pickuplocation,
      expiredate,
      foodquantity,
      additionalnotes,
      foodstatus,
    };
    console.log(food);
    axios
      .post("http://localhost:5000/foods", food)
      .then((res) => {
        if (res.data.insertedId) {
          swal("Wow!", "You Add a New Food Successfully!", "success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold logo my-5 text-center">
        Add a New Food
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="px-5">
          <img src={img} alt="" />
        </div>
        <div className="px-5 lg:px-16">
          <form onSubmit={handleAddNewFood}>
            {/* Food Name  */}
            <div className="form-control mt-5">
              <label htmlFor="foodname">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                name="foodname"
                id="foodname"
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
                className="textarea textarea-bordered textarea-error"
              ></textarea>
            </div>

            <div className="form-control mt-5">
              <input
                type="submit"
                value="Add New Food"
                className="btn btn-error"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
