import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/foods").then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure]);
  return foods;
};

export default useFoods;
