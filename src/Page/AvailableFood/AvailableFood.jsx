import { useEffect, useState } from "react";
import FeaturedFood from "../../Components/FeatureFoods/FeaturedFood";
import useFoods from "../../Hooks/useFoods";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AvailableFood = () => {
  document.title = "shareSurplus | Available Food";
  const Loadfoods = useFoods();
  const [foods, setFoods] = useState(Loadfoods);
  const [filtertext, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleSearchFoods = (event) => {
    event.preventDefault();
    setSearchText(event.target.search.value);
    event.target.reset();
  };

  useEffect(() => {
    axiosSecure.get(`/foods?s=${searchText}`).then((res) => {
      setFoods(res.data);
    });
  }, [searchText, axiosSecure]);
  const handleOnChange = (event) => {
    const selectedOption = event.target.value;
    setFilterText(selectedOption);
    if (filtertext === "old") {
      const filter = foods?.sort(
        (a, b) => new Date(a.expiredate) - new Date(b.expiredate)
      );
      setFoods(filter);
    } else {
      return foods;
    }
  };
  return (
    <div className="my-5">
      <h1 className="text-3xl logo">Available Food: {foods.length}</h1>
      {/* Search Form Start Here  */}
      <div className="my-3 text-center">
        <form onSubmit={handleSearchFoods} className="join">
          <div>
            <div className="">
              <input
                className="input input-bordered join-item w-96"
                placeholder="Search"
                name="search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
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
      <div className="text-right">
        <span className="text-lg logo">Fiter By Expire:</span>{" "}
        <select
          value={filtertext}
          onChange={handleOnChange}
          name="filter"
          className="select select-error max-w-xs logo"
        >
          <option value="0">Default</option>
          <option value="2">More Old</option>
        </select>
      </div>
      {/* Search Form End Here  */}
      {foods.length === 0 ? (
        <div className="flex h-96 w-full items-center justify-center">
          <span className="loading loading-lg loading-spinner text-secondary"></span>
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
