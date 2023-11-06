import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../assets/asda.webp";
import useAuth from "../../Hooks/useAuth";
import SocialSignIn from "../../Components/SocialSignIn/SocialSignIn";
const Signin = () => {
  document.title = "sharesurplus | Signin";
  const { loginUser } = useAuth();
  const [showpass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    loginUser(email, password)
      .then((res) => {
        console.log("Successfully Sign in ", res.user.email);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log("Something Went Wrong", error.message);
      });
  };
  return (
    <div className="my-10 grid items-center justify-center grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center relative">
        <img src={bg} alt="" className="animate-pulse" draggable="false" />
      </div>
      <div className="px-4 lg:px-16">
        <h1 className="logo text-3xl text-center">Please Sign in</h1>
        <form onSubmit={handleSignUp} className="w-full">
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
          <div className="form-control mt-5">
            <input type="submit" className="btn btn-error" value="Signin" />
          </div>
          <div className="from-control mt-5">
            <p className="text-center">
              Don&apos;t have account, <Link to="/signup">Please Sign Up</Link>
              <SocialSignIn />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
