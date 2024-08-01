import React from "react";

const Age = ({ placeholder, lable }) => {
  return (
    <div>
      <div className="  text-sm font-medium text-left py-2 text-black">
        {lable}
      </div>
      <div>
        <input
          className=" py-1 px-2 w-full border border-slate-300 rounded"
          type="number"
          name="age"
          id="age"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Age;
