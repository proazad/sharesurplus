import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyFoodRequest = () => {
  document.title = "shareSurplus | Food Request";
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const url = `/rqFoods?email=${user.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure, url]);
  return (
    <div>
      <h1 className="text-4xl text-cente">
        Food Request not Available :{foods.length}
      </h1>
    </div>
  );
};

export default MyFoodRequest;
