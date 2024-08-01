import React from "react";
import { Link } from "react-router-dom";

const Warning = ({ placeholder, place, lable }) => {
  return (
    <div className=" flex justify-center text-center space-x-1">
      <div className=" text-black text-base">{placeholder}</div>{" "}
      <Link className=" underline text-black text-base" to={place}>
        {lable}
      </Link>
    </div>
  );
};

export default Warning;
