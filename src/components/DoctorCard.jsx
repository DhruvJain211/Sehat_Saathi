import React, { useEffect, useState } from "react";

const DoctorCard = ({ doctor }) => {
  const [value, setvalue] = useState(false);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="w-full object-contain h-52"
          src="https://i.pinimg.com/736x/06/b1/85/06b185e5b2322f1ab0557db59b554cd5.jpg"
          alt="card-image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {doctor.name}
          </h5>
        </a>
        <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-100">
          Speciality in: {doctor.speciality}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {doctor.description}
        </p>
        <a
          onClick={() => {
            setvalue(true);
          }}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white cursor-pointer ${
            value
              ? " bg-green-500  dark:bg-green-500 hover:bg-green-600"
              : "bg-blue-700 dark:hover:bg-blue-700  hover:bg-blue-800"
          }  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800`}
        >
          {value ? "Appointment Booked" : "Book Appointment"}
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
