import React from "react";

const Dateinput = ({ lable }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2 text-black">
        {lable}
      </div>
      <input type="date" name="DOB" id="DOB" />
    </div>
  );
};

export default Dateinput;
