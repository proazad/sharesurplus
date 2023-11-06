import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
const SocialSignIn = () => {
  const { googleSignin, githubSignin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSingIn = () => {
    googleSignin()
      .then((res) => {
        swal(
          `Hello Mr. ${res?.user?.displayName}`,
          `Sign in Successfull!with ${res?.user?.email}`,
          "success"
        );
        navigate(location?.state ? location?.state : "/");
      })
      .catch(() => {
        swal("Opss!", `Something went wrong!`, "error");
      });
  };
  const handleGithubSignIn = () => {
    githubSignin()
      .then((res) => {
        swal(
          `Hello Mr. ${res?.user?.displayName}`,
          `Sign in Successfull!with ${res?.user?.email}`,
          "success"
        );
      })
      .catch(() => {
        swal("Opss!", `Something went wrong!`, "error");
      });
  };
  const handleFacebookSignIn = () => {
    swal("Sorry!", "Facabook sign in not Available Now", "warning");
  };
  const handleInstagramSignIn = () => {
    swal("Sorry!", "Instagram sign in not Available Now", "warning");
  };
  return (
    <div>
      {/* <h3 className="text-2xl text-center"> </h3> */}
      <div className="divider logo">Continue with</div>
      <div className="flex items-center justify-center my-3 gap-5 text-3xl">
        <FcGoogle onClick={handleGoogleSingIn} className="cursor-pointer" />
        <FaGithub onClick={handleGithubSignIn} className="cursor-pointer" />
        <FaFacebook onClick={handleFacebookSignIn} className="text-blue-500" />
        <BsInstagram onClick={handleInstagramSignIn} className="text-red-500" />
      </div>
    </div>
  );
};

export default SocialSignIn;
