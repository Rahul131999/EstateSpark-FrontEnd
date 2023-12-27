import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <header className="bg-slate-400 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-black">Estate</span>
            <span className="text-orange-500">Spark</span>
          </h1>
        </Link>
        <form className="bg-slate-200 rounded-lg p-3 flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          ></input>
          <FaSearch className="text-slate-700" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline text-slate-700">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline text-slate-700">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="hover:underline text-slate-700">Login</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
