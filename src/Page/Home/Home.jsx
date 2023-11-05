import FeatureFoods from "../../Components/FeatureFoods/FeatureFoods";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";

const Home = () => {
  document.title = "sharesurplus | Home";
  return (
    <div>
      <HomePageBanner />
      <FeatureFoods />
    </div>
  );
};

export default Home;
