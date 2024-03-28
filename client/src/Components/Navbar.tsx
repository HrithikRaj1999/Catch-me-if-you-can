import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const NavList = () => (
    <ul className="flex items-center justify-between p-4 bg-black text-white md:flex-row">
      <Link
        to="/"
        className={`flex items-center ${pathname === "/" ? "underline" : ""}`}
      >
        <li className="p-2 sm:text-lg md:text-3xl font-normal">
          <span className="cursor-pointer py-1.5 font-medium">Home</span>
        </li>
      </Link>

      <li className="p-2 sm:text-lg md:text-3xl font-normal">
        <Link
          to="/create-city"
          className={`flex items-center ${
            pathname === "/create-car" ? "underline" : ""
          }`}
        >
          Create city
        </Link>
      </li>
      <li className="p-2 sm:text-lg md:text-3xl font-normal">
        <Link
          to="/create-vehicle"
          className={`flex items-center ${
            pathname === "/create-vehicle" ? "underline" : ""
          }`}
        >
          Create Vehicle
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 bg-black text-white max-w-full md:flex md:items-center justify-between md:justify-end px-4 py-2 lg:px-8 lg:py-4">
      <NavList />
    </nav>
  );
}
