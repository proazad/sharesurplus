import Carousel from "react-elastic-carousel";
import banner2 from "../../assets/banner02.jpg";
import banner3 from "../../assets/banner03.jpg";
import banner4 from "../../assets/banner04.jpg";
import banner5 from "../../assets/banner05.jpg";
import banner6 from "../../assets/banner06.jpg";
import banner7 from "../../assets/banner07.jpg";
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
          <img src={banner2} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute lg:hover:animate-shake motion-reduce:animate-none">
            <h2 className="text-7xl logo text-white animate-fade-down animate-once">
              Lorem ipsum dolor sit.
            </h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={banner3} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute z-40 ">
            <h2 className="text-7xl logo text-white">Lorem ipsum dolor sit.</h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={banner4} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute z-40 ">
            <h2 className="text-7xl logo text-white">Lorem ipsum dolor sit.</h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={banner5} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute z-40 ">
            <h2 className="text-7xl logo text-white">Lorem ipsum dolor sit.</h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={banner6} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute z-40 ">
            <h2 className="text-7xl logo text-white">Lorem ipsum dolor sit.</h2>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={banner7} alt="" className="w-full max-h-full rounded-md" />
          <div className="absolute z-40 ">
            <h2 className="text-7xl logo text-white">Lorem ipsum dolor sit.</h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePageBanner;
