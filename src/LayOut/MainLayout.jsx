import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import logo from "../assets/a.png";
const MainLayout = () => {
  const { user, userLogOut, loading } = useAuth();
  const handleUserLogOut = () => {
    userLogOut()
      .then(() => {
        console.log("Successfully Sign Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const userprofile = (
    <div className="dropdown dropdown-end p-0">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {loading ? (
            <FaUserAlt className="text-2xl" />
          ) : (
            <img src={user?.photoURL} />
          )}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[99] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 top-10"
      >
        <li>
          <a className="justify-between">{user?.displayName}</a>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <a onClick={handleUserLogOut}>Logout</a>
        </li>
      </ul>
    </div>
  );
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
          <span onClick={handleUserLogOut} className="text-base">
            LogOut
          </span>
        ) : (
          <NavLink to="/signin" className="text-base ">
            Signin
          </NavLink>
        )}
      </li>
      {user?.email && <li>{userprofile}</li>}
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
              <ul className="menu menu-horizontal items-center">
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
        <footer className="footer p-10 bg-base-200 text-base-content">
          <aside>
            <Link
              to="/"
              className="flex  items-center select-none cursor-pointer"
            >
              <span className="logo text-2xl font-bold">shareSurplus </span>
              <img src={logo} alt="" className="w-12" draggable="false" />
            </Link>
            <p>
              ShareSurplus.org
              <br />
              Empowering Communities, One Donation at a Time
            </p>
            <address>
              Level-4, 34, Awal Centre, Banani, Dhaka <br /> <b>Support:</b>
              web@programming-hero.com <br /> <b>Helpline:</b> 01322901105{" "}
              <br /> (Available : Sat - Thu, 10:00 AM to 7:00 PM)
            </address>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/available-food" className="link link-hover">
              Available Foods
            </Link>
            <Link to="/add-food" className="link link-hover">
              Add Food
            </Link>
            <Link to="/manage-food" className="link link-hover">
              Manage My Food
            </Link>
            <Link to="/food-request" className="link link-hover">
              My Food Request
            </Link>
            <Link to="/signin" className="link link-hover">
              Signin/Signup
            </Link>
          </nav>
          <nav>
            <header className="footer-title">Organization</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
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
