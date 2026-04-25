import Link from "next/link";
import NavLink from "../NavLink";

const NavPage = () => {
  const menuItems = (
    <>
      <NavLink href="/" className="rounded-lg">
        Home
      </NavLink>
      <NavLink href="/About" className="rounded-lg">
        About
      </NavLink>
      <NavLink href="/Career" className="rounded-lg">
        Career
      </NavLink>
    </>
  );
  return (
    <div className="container mx-auto navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-semibold ">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/LogIn" className="btn btn-outline">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NavPage;
