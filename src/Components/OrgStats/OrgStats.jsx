import useFoods from "../../Hooks/useFoods";

const OrgStats = () => {
  const allfoods = useFoods();
  return (
    <div className="my-16">
      <div className="text-center my-10">
        <h1 className="text-4xl logo font-bold">Statistics</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-2 lg:mx-0">
        <div className="text-center bg-blue-400 py-12 rounded-lg">
          <h1 className="text-xl lg:text-3xl text-white logo font-bold">
            Food Added
          </h1>
          <p className="text-2xl text-white font-bold">{allfoods.length}</p>
        </div>
        <div className="text-center bg-blue-400 py-12 rounded-lg">
          <h1 className="text-xl lg:text-3xl text-white logo font-bold">
            Food Request
          </h1>
          <p className="text-2xl text-white font-bold">{allfoods.length - 5}</p>
        </div>
        <div className="text-center bg-blue-400 py-12 rounded-lg">
          <h1 className="text-xl lg:text-3xl text-white logo font-bold">
            Delivery Pending
          </h1>
          <p className="text-2xl text-white font-bold">{allfoods.length - 5}</p>
        </div>
        <div className="text-center bg-blue-400 py-12 rounded-lg">
          <h1 className="text-xl lg:text-3xl text-white logo font-bold">
            Delivery Complete
          </h1>
          <p className="text-2xl text-white font-bold">{5}</p>
        </div>
        {/* <div className="text-center bg-blue-400 py-12 rounded-lg">
          <h1 className="text-xl lg:text-3xl text-white logo font-bold">
            Donor/Member
          </h1>
          <p className="text-2xl text-white font-bold">{100}</p>
        </div> */}
      </div>
    </div>
  );
};

export default OrgStats;
