import Gallery from "./Gallery";

const FoodsGalley = () => {
  return (
    <div className="my-16">
      <div>
        <h2 className="text-xl lg:text-4xl logo font-bold text-center">
          Food Image Gallery
        </h2>
        <h2 className="text-lg lg:text-2xl logo text-center">
          Feast Your Eyes: Where Food Becomes Art!
        </h2>
      </div>
      <Gallery />
    </div>
  );
};

export default FoodsGalley;
