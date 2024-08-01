import { useEffect, useState } from "react";

const usefetch = (url) => {
  const [data, setdata] = useState();
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "87cfe8e492mshfd5386f6179c927p15a385jsn754cee4638ec",
      "x-rapidapi-host":
        "doctors-and-medical-professionals-of-jaipur-india.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(url, options);
      const result = await response.json();
      const formattedOptions = result.message.speciality.map((speciality) => ({
        value: speciality,
        label: speciality.charAt(0).toUpperCase() + speciality.slice(1),
      }));
      console.log(formattedOptions);
      setdata(formattedOptions);
    };
    fetchdata();
  }, []);
  return data;
};
export default usefetch;
