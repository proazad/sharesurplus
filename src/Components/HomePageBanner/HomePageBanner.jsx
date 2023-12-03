import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
const HomePageBanner = () => {
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
        <div className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/YQsrtCn/banner02.jpg"
            alt=""
            className="w-full max-h-full rounded-md"
          />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
              Together We Can
            </h2>
            <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
              Join ShareSurplus in Ending Hunger!
            </h2>
            <Link
              to="/signup"
              className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
            >
              Join With us
            </Link>
          </div>
        </div>
        {/* Slider 2 */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/Y082sbk/banner03.jpg"
            alt=""
            className="w-full max-h-full rounded-md"
          />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
              Together We Thrive
            </h2>
            <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
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
        {/* Slider 3 */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/vQVCr9T/banner04.jpg"
            alt=""
            className="w-full max-h-full rounded-md"
          />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
              Unlock the Power of Sharing
            </h2>
            <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
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
        {/* Slider 4 */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/Gc28zNJ/banner05.jpg"
            alt=""
            className="w-full max-h-full rounded-md"
          />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
              Share Surplus
            </h2>
            <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
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
        {/* Slider 5 */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/mG1DwK6/banner06.jpg"
            alt=""
            className="w-full max-h-full rounded-md"
          />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
              Creating Impact, Spreading Joy
            </h2>
            <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
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
        {/* Slider 6 */}
        <div className="relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/Wn22FYP/banner07.jpg"
            alt=""
            className="w-full max-h-full rounded-md"
          />
          <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
            <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
              Share the Wealth, Share the Love
            </h2>
            <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
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
