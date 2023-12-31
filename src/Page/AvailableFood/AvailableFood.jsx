import { useEffect, useState } from "react";
import FeaturedFood from "../../Components/FeatureFoods/FeaturedFood";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AvailableFood = () => {
  document.title = "shareSurplus | Available Food";
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleSearchFoods = (event) => {
    event.preventDefault();
    setSearchText(event.target.search.value);
    event.target.reset();
  };

  useEffect(() => {
    axiosSecure.get(`/foods?s=${searchText}`).then((res) => {
      const available = res.data.filter(
        (item) => item.foodstatus === "available"
      );
      setFoods(available);
    });
  }, [searchText, axiosSecure]);

  const handlefilterFoods = () => {
    const sortedFoods = [...foods].sort(
      (a, b) => new Date(b.expiredate) - new Date(a.expiredate)
    );
    setFoods(sortedFoods);
  };
  return (
    <div className="my-5">
      <h1 className="text-3xl logo mx-2 lg:mx-0">
        Available Food: {foods.length}
      </h1>
      {/* Search Form Start Here  */}
      <div className="my-3 text-center mx-2 lg:mx-0">
        <form onSubmit={handleSearchFoods} className="join">
          <div>
            <div className="">
              <input
                className="input input-bordered input-error join-item w-96"
                placeholder="Search"
                name="search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item btn-error">Search</button>
          </div>
        </form>
        {searchText && (
          <>
            <h1 className="logo my-3 text-lg">
              Your search for :{" "}
              <span className="text-yellow-500">{searchText}</span>
            </h1>
            <h1 className="logo my-3 text-lg">
              <span className="text-yellow-500">{foods.length}</span> : result
              found
            </h1>
          </>
        )}
      </div>
      <div className="text-center lg:text-right">
        <span className="text-lg logo">Fiter By Expire:</span>{" "}
        <span
          onClick={handlefilterFoods}
          className="text-error cursor-pointer hover:bg-emerald-200 py-1 px-2 hover:text-black duration-300 rounded select-none"
        >
          Expire soon
        </span>
      </div>
      {/* Search Form End Here  */}
      {foods.length === 0 ? (
        <div className="flex h-96 w-full items-center justify-center">
          <h2 className="text-2xl">No Data Found!</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
          {foods?.map((food) => (
            <FeaturedFood key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableFood;
