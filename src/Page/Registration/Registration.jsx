import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import bg from "../../assets/asda.webp";
import { Link } from "react-router-dom";
const Registration = () => {
  document.title = "sharesurplus | Registration";
  const [showpass, setShowPass] = useState(false);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name").trim();
    const photo = form.get("photo").trim();
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    const confirmpassword = form.get("confirmpassword").trim();
    const user = { name, photo, email, password, confirmpassword };
  };
  return (
    <div className="my-10 grid items-center justify-center grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center relative">
        <img src={bg} alt="" className="animate-pulse" draggable="false" />
        <p className="absolute bottom-0">
          Already have an account, <Link to="/signin">Please Sign in</Link>
        </p>
      </div>
      <div className="px-4 lg:px-16">
        <h1 className="logo text-3xl text-center">Please Sign up</h1>
        <form onSubmit={handleSignUp} className="w-full">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter you name"
              className="input input-bordered input-error w-full"
            />
          </div>

          <div className="form-control">
            <label htmlFor="photo" className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="url"
              name="photo"
              id="photo"
              placeholder="Enter you photo url"
              className="input input-bordered input-error w-full"
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered input-error w-full"
            />
          </div>
          <div className="form-control relative">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showpass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter a new password"
              className="input input-bordered input-error w-full"
            />
            <p
              onClick={() => setShowPass(!showpass)}
              className="text-2xl absolute right-2 top-12"
            >
              {showpass ? <BsEye /> : <BsEyeSlash />}
            </p>
          </div>
          <div className="form-control relative">
            <label htmlFor="password" className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={showpass ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm password"
              className="input input-bordered input-error w-full"
            />
            <p
              onClick={() => setShowPass(!showpass)}
              className="text-2xl absolute right-2 top-12"
            >
              {showpass ? <BsEye /> : <BsEyeSlash />}
            </p>
          </div>
          <div className="form-control mt-5">
            <input type="submit" className="btn btn-error" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
