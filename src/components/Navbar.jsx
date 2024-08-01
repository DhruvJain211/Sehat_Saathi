import React from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex justify-between p-6 bg-blue-600 text-white">
      <div className=" text-xl font-bold cursor-pointer hover: drop-shadow-md  animate-bounce">
        Seehat-Saathi
      </div>
      <div className="flex  space-x-14">
        <Link className=" text-lg font-semibold hover:text-gray-400 ">
          Home
        </Link>
        <Link
          to="/appointment"
          className=" text-lg  font-semibold hover:text-gray-400 "
        >
          Appointment
        </Link>
        <Link className=" text-lg  font-semibold hover:text-gray-400 ">
          Medicine Info
        </Link>
      </div>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          ` text-lg font-semibold hover:text-gray-400 ${
            isActive ? " text-gray-800" : " text-white"
          }`
        }
      >
        Signup
      </NavLink>
    </div>
  );
};

export default Navbar;
