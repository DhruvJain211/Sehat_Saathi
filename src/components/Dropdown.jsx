import React, { useState } from "react";
import usefetch from "../utils/usefetch";
import Select from "react-select";
const options = [
  { value: "orthologist", label: "Orthologist" },
  { value: "dermitologist", label: "Dermitologist" },
];
const Dropdown = ({ selectedoption, setSelectedOption }) => {
  const url =
    "https://doctors-and-medical-professionals-of-jaipur-india.p.rapidapi.com/doctors/";
  const data = usefetch(url);

  const handlechange = (selectedoption) => {
    setSelectedOption(selectedoption);
  };
  console.log(selectedoption);
  return (
    <div className=" flex justify-center">
      <div className="w-4/5  mt-6">
        <Select options={data} value={selectedoption} onChange={handlechange} />
      </div>
    </div>
  );
};

export default Dropdown;
