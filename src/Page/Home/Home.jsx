import FeatureFoods from "../../Components/FeatureFoods/FeatureFoods";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";
import OrgStats from "../../Components/OrgStats/OrgStats";

const Home = () => {
  document.title = "sharesurplus | Home";
  return (
    <div>
      <HomePageBanner />
      <FeatureFoods />
      <OrgStats />
    </div>
  );
};

export default Home;
