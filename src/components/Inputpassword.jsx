import React from "react";

const Inputpassword = ({ placeholder, lable, Onchange }) => {
  return (
    <div>
      <div className="  text-sm font-medium text-left py-2 text-black">
        {lable}
      </div>
      <input
        onChange={Onchange}
        type="password"
        name="password"
        className=" py-1 px-2 w-full border border-slate-300 rounded"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputpassword;
