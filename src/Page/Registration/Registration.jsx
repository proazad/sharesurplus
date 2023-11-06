import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import bg from "../../assets/asda.webp";
import axios from "axios";
import SocialSignIn from "../../Components/SocialSignIn/SocialSignIn";
const Registration = () => {
  document.title = "sharesurplus | Registration";
  const [showpass, setShowPass] = useState(false);
  const { registration, profileUpdate } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name").trim();
    const photo = form.get("photo").trim();
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    const confirmpassword = form.get("confirmpassword").trim();
    const user = { name, photo, email, password };
    const regx = /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).+$/;
    if (password.length < 6) {
      return swal("Oops!", "Password Must be 6 character or Long", "error");
    } else if (password !== confirmpassword) {
      return swal("Oops!", "Password Not Matched!", "error");
    } else if (!/[A-Z]/.test(password)) {
      return swal("Oops!", "Password Must have atlest 1 Uppercase!", "error");
    } else if (!regx.test(password)) {
      return swal(
        "Oops!",
        "Password Must have at lest 1 special character!",
        "error"
      );
    } else {
      registration(email, password)
        .then((res) => {
          profileUpdate(name, photo);
          axios.post("http://localhost:5000/user", user).then((res) => {
            if (res) {
              console.log(res.data);
              navigate(location?.state ? location?.state : "/");
            }
          });
          swal("wow!", `Registration Successfull ${res.user.email}`, "success");
        })
        .catch(() => {
          swal("Opps", "Something went wrong please try again later", "error");
        });
    }
  };
  return (
    <div className="my-10 grid items-center justify-center grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center relative">
        <img src={bg} alt="" className="animate-pulse" draggable="false" />
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
              required
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
              required
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
              required
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
              required
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
              required
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
          <div className="from-control mt-5">
            <p className="text-center">
              Already have an account,{" "}
              <Link to="/signin" className="text-blue-600">
                Please Sign in
              </Link>
              <SocialSignIn />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
