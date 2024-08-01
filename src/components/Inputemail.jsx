import React from "react";

const Inputemail = ({ placeholder, lable, Onchange }) => {
  return (
    <div>
      <div className="  text-sm font-medium text-left py-2 text-black">
        {lable}
      </div>
      <input
        onChange={Onchange}
        type="email"
        name="email"
        placeholder={placeholder}
        className=" px-2 py-1 border border-slate-300 rounded w-full"
      />
    </div>
  );
};

export default Inputemail;
