import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import Heading from "../components/Heading";
import DoctorCard from "../components/DoctorCard";

const fake_data = [
  {
    email: null,
    id: 3,
    description:
      "Dr Anurag Dhoundiyal Preventive and Social Medicine Community Medicine Best Doctors in New Sanganer Road�",
    speciality: "ENT",
    contact_no: "7715974550",
    name: "Dr Anurag Dhoundiyal",
    address: "Plot No. 500, Katewa Nagar, New Sanganer Road, Jaipur",
    area: "New Sanganer Road",
  },
];

const Doctor = () => {
  const [selectedoption, setSelectedOption] = useState(null);
  const [doctors, Setdoctors] = useState([]);
  const url =
    "https://doctors-and-medical-professionals-of-jaipur-india.p.rapidapi.com/doctors/specialty/" +
    selectedoption?.value;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "87cfe8e492mshfd5386f6179c927p15a385jsn754cee4638ec",
      "x-rapidapi-host":
        "doctors-and-medical-professionals-of-jaipur-india.p.rapidapi.com",
    },
  };
  useEffect(() => {
    if (selectedoption) {
      const fetchdata = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        Setdoctors(result);
      };
      fetchdata();
    }
  }, [selectedoption]);
  console.log(doctors);
  return (
    <div className=" bg-blue-100 flex justify-center p-6 h-screen">
      <div className="w-4/5   ">
        <Heading lable={"Search your Doctor here"} />
        <Dropdown
          selectedoption={selectedoption}
          setSelectedOption={setSelectedOption}
        />
        <div className=" mt-7">
          {doctors.map((doctor) => {
            return <DoctorCard key={doctor.id} doctor={doctor} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
