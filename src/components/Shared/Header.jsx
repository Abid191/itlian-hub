/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(()=> toast.error('Log out successFully'))
      .catch((err) => console.log(err));
  };
  return (
    <div className="md:flex justify-between items-center py-4 md:px-20 sticky top-0 bg-slate-50 z-10">
      <h3 className="text-2xl md:text-left text-center font-medium text-gray-600">Italian Chef Hub</h3>
      <div className="flex justify-center items-center gap-7 md:mt-0 mt-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active" : "hover:text-red-500"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active" : "hover:text-red-500"
          }
          to="/blog"
        >
          Blog
        </NavLink>

        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom cursor-pointer"
              data-tip={user?.displayName || "Anonymous"}
            >
              <img
                className="rounded-full h-10 w-10 border-2 border-red-300"
                src={
                  user?.photoURL ||
                  "https://img.freepik.com/free-icon/avatar_318-158392.jpg"
                }
                alt=""
              />
            </div>{" "}
            <Link onClick={handleLogout} className="button-secondary">
              <button>Logout</button>
            </Link>{" "}
          </>
        ) : (
          <Link to="/login">
            <button className="button-primary">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
