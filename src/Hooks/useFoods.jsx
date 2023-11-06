import axios from "axios";
import { useEffect, useState } from "react";
const useFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/foods").then((res) => {
      setFoods(res.data);
    });
  }, []);
  return foods;
};

export default useFoods;
