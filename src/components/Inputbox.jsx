import React from "react";

const Inputbox = ({ lable, placeholder, Onchange }) => {
  return (
    <div>
      <div className="  text-sm font-medium text-left py-2 text-black">
        {lable}
      </div>
      <input
        onChange={Onchange}
        className=" w-full border border-slate-200 rounded py-1 px-2"
        type="text"
        name="firstname"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Inputbox;
