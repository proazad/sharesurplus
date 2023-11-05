import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import image from "../assets/error.png";
const Error404 = () => {
  return (
    <div className="mx-0 lg:mx-40 h-screen relative flex items-center justify-center">
      <Link
        to="/"
        className="animate-bounce logo flex gap-3 absolute bottom-20 lg:bottom-0 text-3xl"
      >
        <GiReturnArrow />
        Back to Home
      </Link>
      <img
        src={image}
        className="w-screen max-h-screen"
        draggable="false"
        alt=""
      />
    </div>
  );
};

export default Error404;
