import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DataTable from "./dataTable";

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
  return (
    <div className="my-10">
      <h1 className="text-4xl logo mb-5 font-semibold">Manage My Foods:{foods.length}</h1>
      {foods.length === 0 ? (
        <div className="flex h-96 w-full items-center justify-center">
          <h2 className="text-2xl logo">No Data Found!</h2>
        </div>
      ) : (
        <div>
          <DataTable foods={foods}></DataTable>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
