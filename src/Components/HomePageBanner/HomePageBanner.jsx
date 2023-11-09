import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

const HomePageBanner = () => {
  const images = [
    {
      id: 1,
      url: "https://i.ibb.co/YQsrtCn/banner02.jpg",
      title: "Together We Can",
      slugan: "Join ShareSurplus in Ending Hunger!",
      btnlink: "/signup",
      btntext: "",
    },
    {
      id: 2,
      url: "https://i.ibb.co/Y082sbk/banner03.jpg",
      title: "Together We Can",
      slugan: "Join ShareSurplus in Ending Hunger!",
    },
    {
      id: 3,
      url: "https://i.ibb.co/vQVCr9T/banner04.jpg",
      title: "Together We Can",
      slugan: "Join ShareSurplus in Ending Hunger!",
    },
    {
      id: 4,
      url: "https://i.ibb.co/Gc28zNJ/banner05.jpg",
      title: "Together We Can",
      slugan: "Join ShareSurplus in Ending Hunger!",
    },
    {
      id: 5,
      url: "https://i.ibb.co/mG1DwK6/banner06.jpg",
      title: "Together We Can",
      slugan: "Join ShareSurplus in Ending Hunger!",
    },
    {
      id: 6,
      url: "https://i.ibb.co/Wn22FYP/banner07.jpg",
      title: "Together We Can",
      slugan: "Join ShareSurplus in Ending Hunger!",
    },
  ];
  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((image) => {
          <SwiperSlide>
            <div className="relative flex items-center justify-center">
              <img
                src={image.url}
                alt=""
                className="w-full max-h-full rounded-md"
              />
              <div className="absolute text-center w-full h-full flex flex-col items-center justify-center backdrop-invert-0 bg-black/30">
                <h2 className="text-2xl lg:text-7xl logo text-white mb-0 lg:mb-5 font-bold">
                  {image.title}
                </h2>
                <h2 className="text-xl lg:text-5xl logo text-white mb-4 lg:mb-10 font-bold">
                  {image.slugan}
                </h2>
                <Link
                  to={image.btnlink}
                  className="btn btn-success btn-outline btn-sm lg:btn-md animate-once animate-fade-down "
                >
                  {image.btntext}
                </Link>
              </div>
            </div>
          </SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default HomePageBanner;
