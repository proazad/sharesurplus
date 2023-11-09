import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageSingleFood = () => {
  const food = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [reqFood, setReqFood] = useState([]);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    axiosSecure.get(`/rqFoods/${food._id}`).then((res) => {
      setReqFood(res.data);
    });
  }, [food._id, axiosSecure]);

  const handleUpdateStatus = (id) => {
    axiosSecure
      .patch(`/foodstatus/${id}`, { foodstatus: "delivered" })
      .then((res) => {
        if (res.data.success) {
          axiosSecure
            .patch(`/reqfoodstatus/${id}`, { foodstatus: "delivered" })
            .then((res) => {
              if (res.data.success) {
                swal("Yah!", "Food Status Updated!", "success");
                setStatus("delivered");
              }
            });
        }
      })
      .catch(() => {
        swal("Opps!", "Something weng wrong! try again", "error");
      });
  };

  const handleFoodRequestDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure
          .delete(`/rqFoods/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              swal("Poof! Food Request has been deleted!", {
                icon: "success",
              });
              navigate("/manage-food");
            }
          })
          .catch(() => {
            swal("Opps!", "Something went wrong! try again", { icon: "error" });
          });
      } else {
        swal("Food Request is safe!");
      }
    });
  };

  return (
    <div className="my-7">
      <h1 className="text-4xl logo font-bold">Manage Your Single Food </h1>
      <h2 className="text-2xl mt-5">Food Name: {food.foodname}</h2>
      <h3 className="text-xl">Status : {food.foodstatus}</h3>
      <div className="my-5">
        <h1 className="text-3xl logo my-2">Food Request Information</h1>

        <div className="grid grid-cols-2 lg:grid-cols-5 items-center gap-5">
          <div className="">
            <img
              src={reqFood.userimage}
              className="w-20"
              alt={reqFood.username}
            />
          </div>
          <div className="">
            <p>{reqFood.username}</p>
          </div>
          <div className="">
            <p>{reqFood.useremail}</p>
          </div>
          <div className="">
            <p>{reqFood.requesttime}</p>
          </div>
          <div className="flex gap-3">
            {status === "delivered" || reqFood.foodstatus === "delivered" ? (
              <>
                <button className="btn btn-sm btn-success ">Delivered</button>
                <button className="btn btn-sm btn-warning" disabled>
                  Cancle Request
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => handleUpdateStatus(food._id)}
                >
                  Delivery
                </button>
                <button
                  onClick={() => handleFoodRequestDelete(reqFood._id)}
                  className="btn btn-sm btn-warning"
                >
                  Cancle Request
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-10/12 p-4 lg:p-10 my-5 mx-auto">
        <div>
          <img
            src={food.foodimage}
            alt=""
            className="mx-auto rounded-xl w-full h-96"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="flex gap-5 my-5 items-center col-span-1">
            <div className="avatar online ">
              <div className="w-10 md:w-16 rounded-full">
                <img src={food.donorimage} alt={food.donorname} />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">
              {food.donorname}
            </h2>
          </div>
          <div className="col-span-2">
            <p className="text-lg lg:text-xl">
              <span className="font-semibold">Pickup Location:</span>{" "}
              {food.pickuplocation}
            </p>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-lg lg:text-3xl font-bold logo">
            {food.foodname}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-5">
          <h2 className="text-lg lg:text-2xl lg:font-semibold logo">
            Food Quantity: {food.foodquantity} Person
          </h2>
          <h2 className="text-lg lg:text-2xl lg:font-semibold logo">
            Expired Date: {food.expiredate}
          </h2>
        </div>
        <div className="my-16">
          <h2 className="text-2xl logo font-medium">Description:</h2>
          <p className="text-xl mb-5">{food.additionalnotes}</p>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleFood;
