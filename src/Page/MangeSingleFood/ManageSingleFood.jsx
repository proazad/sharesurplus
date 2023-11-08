import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageSingleFood = () => {
  const food = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleUpdateStatus = (id) => {
    const foodstatus = { foodstatus: "delivered" };
    axiosSecure
      .patch(`/foodstatus/${id}`, foodstatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          swal("Yah!", "Food Status Updated!", "success");
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
            <img src={food.userimage} className="w-20" alt={food.username} />
          </div>
          <div className="">
            <p>{food.username}</p>
          </div>
          <div className="">
            <p>{food.useremail}</p>
          </div>
          <div className="">
            <p>{food.requesttime}</p>
          </div>
          <div className="flex gap-3">
            <button
              className="btn btn-sm btn-info"
              onClick={() => handleUpdateStatus(food._id)}
            >
              Delivery
            </button>
            <button
              onClick={() => handleFoodRequestDelete(food._id)}
              className="btn btn-sm btn-warning"
            >
              Cancle Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleFood;
