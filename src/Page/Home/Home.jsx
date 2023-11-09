import FeatureFoods from "../../Components/FeatureFoods/FeatureFoods";
import FoodsGalley from "../../Components/FoodsGalley/FoodsGalley";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";
import OrgStats from "../../Components/OrgStats/OrgStats";

const Home = () => {
  document.title = "sharesurplus | Home";
  return (
    <div>
      <HomePageBanner />
      <FeatureFoods />
      <FoodsGalley />
      <OrgStats />
    </div>
  );
};

export default Home;
