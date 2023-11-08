import { useLoaderData } from "react-router-dom";
import FoodRequstForm from "../../Components/FoodRequstForm/FoodRequstForm";
import useAuth from "../../Hooks/useAuth";
const SingleFoodView = () => {
  const loadedFood = useLoaderData();
  const { user } = useAuth();
  const {
    foodname,
    foodimage,
    donorname,
    donoremail,
    donorimage,
    pickuplocation,
    expiredate,
    foodquantity,
    additionalnotes,
  } = loadedFood;

  return (
    <div className="w-full lg:w-10/12 p-4 lg:p-10 my-5 mx-auto">
      <div>
        <img
          src={foodimage}
          alt=""
          className="mx-auto rounded-xl w-full h-96"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        <div className="flex gap-5 my-5 items-center col-span-1">
          <div className="avatar online ">
            <div className="w-10 md:w-16 rounded-full">
              <img src={donorimage} alt={donorname} />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">{donorname}</h2>
        </div>
        <div className="col-span-2">
          <p className="text-lg lg:text-xl">
            <span className="font-semibold">Pickup Location:</span>{" "}
            {pickuplocation}
          </p>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-lg lg:text-3xl font-bold logo">{foodname}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5">
        <h2 className="text-lg lg:text-2xl lg:font-semibold logo">
          Food Quantity: {foodquantity} Person
        </h2>
        <h2 className="text-lg lg:text-2xl lg:font-semibold logo">
          Expired Date: {expiredate}
        </h2>
      </div>
      <div className="my-16">
        <h2 className="text-2xl logo font-medium">Description:</h2>
        <p className="text-xl mb-5">{additionalnotes}</p>
      </div>
      <div className="my-10 text-center">
        {user?.email === donoremail || (
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-orange-600 text-white hover:text-orange-600"
          >
            Request for Food
          </button>
        )}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <FoodRequstForm food={loadedFood} />
    </div>
    
  );
};

export default SingleFoodView;
