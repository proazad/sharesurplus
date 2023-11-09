import { motion, useAnimation } from "framer-motion";
import Masonry from "react-masonry-css";
import useFoods from "../../Hooks/useFoods";

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const images = useFoods();
  const controls = useAnimation();

  const staggerVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const startStaggerAnimation = () => {
    controls.start("visible");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="m-2"
            variants={staggerVariants}
            initial="hidden"
            animate={controls}
            custom={index}
            onMouseEnter={startStaggerAnimation}
          >
            <img
              src={image.foodimage}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
