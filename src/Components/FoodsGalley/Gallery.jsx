// import Masonry from "react-masonry-css";
import useFoods from "../../Hooks/useFoods";

const Gallery = () => {
  const images = useFoods();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 py-8">
      {images.map((image, index) => (
        <div key={index} className="m-2">
          <img
            src={image.foodimage}
            alt={`Image ${index + 1}`}
            className="w-full h-60 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
