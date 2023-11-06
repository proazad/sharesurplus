import { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const MyFoodRequest = () => {
  document.title = "shareSurplus | Food Request";
  const [foods, setFoods] = useState([]);
  const ontheway = foods?.filter((food) => food.foodstatus === "ontheway");
  const available = foods?.filter((food) => food.foodstatus === "available");
  const delivered = foods?.filter((food) => food.foodstatus === "delivered");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const url = `/rqFoods?email=${user.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure, url]);
  const handleRequestFoodDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/rqFoods/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const remain = foods.filter((food) => food._id !== id);
            setFoods(remain);
            swal("Poof! Your Request has been deleted!", {
              icon: "success",
            });
          }
        });
      } else {
        swal("Your  Request is safe!");
      }
    });
  };
  return (
    <div className="my-5 ">
      {available.length > 0 ? (
        <h1 className="text-4xl font-bold text-cente logo">
          You have <span className="text-orange-600">{available.length}</span>{" "}
          Food Request
        </h1>
      ) : (
        <h1 className="text-4xl text-cente logo">You have no Food Request</h1>
      )}
      {ontheway.length > 0 && (
        <h1 className="text-xl font-bold text-cente logo">
          You have <span className="text-orange-600">{ontheway.length}</span>{" "}
          Food On the way
        </h1>
      )}
      {delivered.length > 0 && (
        <h1 className="text-xl font-bold text-cente logo">
          <span className="text-orange-600">
            {delivered.length}
            {delivered.length < 2 ? " time" : " times"}{" "}
          </span>{" "}
          You Accepted Food from request
        </h1>
      )}
      <div className="my-5">
        <h1 className="text-xl">All Requested Foods</h1>
        <div className="overflow-x-auto">
          {foods.length === 0 ? (
            <div className="flex h-96 w-full items-center justify-center">
              <span className="loading loading-lg loading-spinner text-secondary"></span>
            </div>
          ) : (
            <table className="table-sm table-zebra lg:table-lg">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Expiry</th>
                  <th>Pickup Location</th>
                  <th>Donor</th>
                  <th>Request Date</th>
                  <th>Donation</th>
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
                    <td>{food.pickuplocation}</td>
                    <td>{food.donorname}</td>
                    <td>{food.requesttime}</td>
                    <td>{food.donationmoney}tk.</td>
                    <td>{food?.foodstatus}</td>
                    <td>
                      {food?.foodstatus === "available" ? (
                        <button
                          className="btn btn-circle btn-sm btn-outline btn-error"
                          title="cancel"
                          onClick={() => handleRequestFoodDelete(food._id)}
                        >
                          <RxCross2 className="text-2xl" />
                        </button>
                      ) : (
                        <AiOutlineCheckCircle className="text-2xl btn btn-circle btn-sm btn-outline btn-success" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Expiry</th>
                  <th>Pickup Location</th>
                  <th>Request Date</th>
                  <th>Donation</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
