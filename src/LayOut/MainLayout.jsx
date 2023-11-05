import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/a.png";
import useAuth from "../Hooks/useAuth";
const MainLayout = () => {
  const { user ,userLogOut} = useAuth();
  const handleUserLogOut = () => {
    userLogOut()
    .then(()=>{
      console.log("Successfully Sign Out");
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  const navlinks = (
    <>
      <li>
        <NavLink to="/" className="text-base">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/available-food" className="text-base">
          Available Foods
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-food" className="text-base">
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/manage-food" className="text-base ">
          Manage My Foods
        </NavLink>
      </li>
      <li>
        <NavLink to="/food-request" className="text-base ">
          My Food Request
        </NavLink>
      </li>
      <li>
        {user ? (
          <span onClick={handleUserLogOut} className="text-base">LogOut</span>
        ) : (
          <NavLink to="/signin" className="text-base ">
            Signin
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200">
          <div className="container mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <AiOutlineMenu className="text-2xl" />
              </label>
            </div>
            <div className="flex-1">
              <Link
                to="/"
                className="flex  items-center select-none cursor-pointer"
              >
                <span className="logo text-2xl font-bold">shareSurplus </span>
                <img src={logo} alt="" className="w-12" draggable="false" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navlinks}
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <div className="container mx-auto">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
