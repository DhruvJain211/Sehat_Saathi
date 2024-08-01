import React from "react";

const InputPhone = ({ lable, placeholder }) => {
  return (
    <div>
      <div className="  text-sm font-medium text-left py-2 text-black">
        {lable}
      </div>
      <input
        className=" py-1 px-2 w-full border border-slate-300 rounded"
        type="number"
        name="phoneNUmber"
        id="phoneNUmber"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputPhone;
