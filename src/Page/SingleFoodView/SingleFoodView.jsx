import Carousel from "react-elastic-carousel";
import FoodRequstForm from "../../Components/FoodRequstForm/FoodRequstForm";
import avater from "../../assets/azad.jpg";
import food1 from "../../assets/featurefood01.jpg";
import food2 from "../../assets/featurefood02.png";
import food3 from "../../assets/featurefood03.jpg";
import food4 from "../../assets/featurefood04.jpg";
import food5 from "../../assets/featurefood05.jpg";
import food6 from "../../assets/featurefood06.webp";
const SingleFoodView = () => {
  return (
    <div className="w-full lg:w-10/12 p-4 lg:p-10 my-5 mx-auto">
      <div>
        <Carousel
          itemsToShow={1}
          enableAutoPlay={true}
          autoPlaySpeed={5000}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={800}
        >
          <img src={food1} alt="" className="mx-auto rounded-xl w-full h-96" />
          <img src={food2} alt="" className="mx-auto rounded-xl w-full h-96" />
          <img src={food3} alt="" className="mx-auto rounded-xl w-full h-96" />
          <img src={food4} alt="" className="mx-auto rounded-xl w-full h-96" />
          <img src={food5} alt="" className="mx-auto rounded-xl w-full h-96" />
          <img src={food6} alt="" className="mx-auto rounded-xl w-full h-96" />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        <div className="flex gap-5 my-5 items-center col-span-1">
          <div className="avatar online ">
            <div className="w-10 md:w-16 rounded-full">
              <img src={avater} />
            </div>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">Azad Hossain</h2>
        </div>
        <div className="col-span-2">
          <p className="text-lg lg:text-xl">
            <span className="font-semibold">Pickup Location:</span> Notun Bazar,
            Badda, Dhaka-1207
          </p>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-lg lg:text-3xl font-bold logo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          similique.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5">
        <h2 className="text-lg lg:text-2xl lg:font-semibold logo">
          Food Quantity: 25 Person
        </h2>
        <h2 className="text-lg lg:text-2xl lg:font-semibold logo">
          Expired Date: 5:00pm 10/11/2023
        </h2>
      </div>
      <div className="my-16">
        <h2 className="text-2xl logo font-medium">Description:</h2>
        <p className="text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          dolorum fugit possimus dolores repudiandae debitis aliquid omnis
          exercitationem amet qui maxime quisquam deserunt rerum, maiores nisi
          laborum consequuntur labore ipsum quidem laudantium. Facilis similique
          obcaecati enim adipisci, ex maxime quo excepturi iure? Excepturi,
          velit veritatis! Voluptatum omnis hic laudantium maiores.
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
          quos, quo accusamus magnam rerum quia eaque enim, odio eum porro esse
          laudantium necessitatibus vitae harum reiciendis delectus iure quasi
          ipsa perferendis minus hic suscipit fuga molestiae! Inventore, fugit
          esse. Id, excepturi! Corporis recusandae asperiores, eveniet qui
          aliquam pariatur architecto!
        </p>
      </div>
      <div className="my-10 text-center">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn bg-orange-600 text-white hover:text-orange-600"
        >
          Request for Food
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <span className="text-2xl">✕</span>
            </button>
          </form>
          <h3 className="font-bold text-lg">Food Request Form</h3>
          <FoodRequstForm />
        </div>
      </dialog>
    </div>
  );
};

export default SingleFoodView;
