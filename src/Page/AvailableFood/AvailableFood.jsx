import FeaturedFood from "../../Components/FeatureFoods/FeaturedFood";
import useFoods from "../../Hooks/useFoods";

const AvailableFood = () => {
  document.title = "shareSurplus | Available Food";
  const foods = useFoods();
  return (
    <div className="my-5">
      <h1 className="text-3xl logo">Available Food: {foods.length}</h1>
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
