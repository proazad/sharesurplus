import Carousel from "react-elastic-carousel";
import banner2 from "../../assets/banner02.jpg";
import banner3 from "../../assets/banner03.jpg";
import banner4 from "../../assets/banner04.jpg";
import banner5 from "../../assets/banner05.jpg";
import banner6 from "../../assets/banner06.jpg";
import banner7 from "../../assets/banner07.jpg";
import { Link } from "react-router-dom";
const HomePageBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner7})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", // Set the desired height for your banner
    position: "relative",
    // Set position to relative to position child elements
  };
  const titleStyle = {
    position: "absolute",
    top: "50%", // Position the title at the vertical center
    left: "50%", // Position the title at the horizontal center
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    mixBlendMode: "overlay",
  };
  return (
    <div className="my-10">
      <Carousel
        focusOnSelect={true}
        itemsToShow={1}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={800}
      >
        {/* Slider 01  */}
        <div className="relative flex items-center justify-center">
          <img src={banner2} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-3xl lg:text-7xl logo text-white mb-3 lg:mb-5 font-bold">
              Together We Can
            </h2>
            <h2 className="text-2xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Join ShareSurplus in Ending Hunger!
            </h2>
            <Link
              to="/signup"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              Join with us
            </Link>
          </div>
        </div>
        {/* Slider 02  */}
        <div className="relative flex items-center justify-center">
          <img src={banner3} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-3xl lg:text-7xl logo text-white mb-3 lg:mb-5 font-bold">
              Together We Thrive
            </h2>
            <h2 className="text-2xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Share Surplus, Share Hope
            </h2>
            <Link
              to="/available-food"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              View Foods
            </Link>
          </div>
        </div>
        {/* Slider 03  */}
        <div className="relative flex items-center justify-center">
          <img src={banner4} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-3xl lg:text-7xl logo text-white mb-3 lg:mb-5 font-bold">
              Unlock the Power of Sharing
            </h2>
            <h2 className="text-2xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Join ShareSurplus Today!
            </h2>
            <Link
              to="/signup"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              Join with us
            </Link>
          </div>
        </div>
        {/* Slder 04  */}
        <div className="relative flex items-center justify-center">
          <img src={banner5} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-3xl lg:text-7xl logo text-white mb-3 lg:mb-5 font-bold">
              Share Surplus
            </h2>
            <h2 className="text-2xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Empowering Generosity, Building Futures
            </h2>
            <Link
              to="/add-food"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              Add Foods
            </Link>
          </div>
        </div>
        {/* Slider 05  */}
        <div className="relative flex items-center justify-center">
          <img src={banner6} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-3xl lg:text-7xl logo text-white mb-3 lg:mb-5 font-bold">
              Creating Impact, Spreading Joy
            </h2>
            <h2 className="text-2xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Your ShareSurplus Journey Begins Here!
            </h2>
            <Link
              to="/available-food"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              View Foods
            </Link>
          </div>
        </div>
        {/* Slider 06  */}

        <div className="relative flex items-center justify-center">
          <img src={banner7} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-3xl lg:text-7xl logo text-white mb-3 lg:mb-5 font-bold">
              Share the Wealth, Share the Love
            </h2>
            <h2 className="text-2xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Discover ShareSurplus!
            </h2>
            <Link
              to="/available-food"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              View Foods
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePageBanner;
