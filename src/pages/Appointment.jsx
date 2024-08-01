import React, { useState } from "react";
import Inputbox from "../components/Inputbox";
import Dateinput from "../components/Dateinput";
import Radio_input from "../components/Radio_input";
import Inputemail from "../components/Inputemail";
import InputPhone from "../components/InputPhone";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Male");

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }
  return (
    <div className=" bg-blue-200 flex justify-center items-center h-screen">
      <div className=" w-4/5 flex flex-col justify-center  bg-white p-6 space-y-4 rounded-lg shadow-2xl bg-opacity-90 backdrop-filter backdrop-blur-xl">
        <div className=" text-center text-lg space-y-2">
          <Heading lable={"Appointment Form"} />

          <Subheading lable={"Enter your details"} />
        </div>

        <div className=" flex space-x-9 w-full ">
          <div className="w-full">
            <Inputbox lable={"First Name"} placeholder={"John"} />
          </div>
          <div className="w-full">
            <Inputbox lable={"Last Name"} placeholder={"Doe"} />
          </div>
        </div>

        <div className=" flex space-x-9 w-full ">
          <div className="w-full">
            <Inputemail lable={"Email"} placeholder={"john@gmail.com"} />
          </div>
          <div className="w-full">
            <InputPhone lable={"Phone no."} placeholder={"9865722884"} />
          </div>
        </div>

        <div className=" flex space-x-9 w-full  ">
          <div className=" w-full">
            <Dateinput lable={"Birth-Date"} />
          </div>
          <div className=" w-full">
            <Radio_input
              selectedOption={selectedOption}
              handleChange={handleChange}
              lable={"I am *"}
            />
          </div>
        </div>
        <div>
          <Inputbox lable={"Enter the medical issue You facing"} />
        </div>

        <div>
          <Button
            trueval={"Check Doctors "}
            onclick={() => {
              navigate("/doctors");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
