import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DataTable from "./dataTable";
import swal from "sweetalert";

const ManageFood = () => {
  document.title = "shareSurplus | Manage Food";
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const url = `/myfoods?email=${user.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure, url]);
  
  const handleFoodDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Food!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/foods/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const remain = foods.filter((food) => food._id !== id);
            setFoods(remain);
            swal("Poof! Your Food has been deleted!", {
              icon: "success",
            });
          }
        });
      } else {
        swal("Your  Food is safe!");
      }
    });
  };
  return (
    <div className="my-10">
      <h1 className="text-4xl logo mb-5 font-semibold mx-2 lg:mx-0">
        Manage My Foods:{foods.length}
      </h1>
      {foods.length === 0 ? (
        <div className="flex h-96 w-full items-center justify-center">
          <h2 className="text-2xl logo">No Data Found!</h2>
        </div>
      ) : (
        <div>
          <DataTable
            foods={foods}
            handleFoodDelete={handleFoodDelete}
          ></DataTable>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
