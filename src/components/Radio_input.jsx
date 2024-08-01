import React from "react";

const Radio_input = (props) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2 text-black">
        {props.lable}
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            checked={props.selectedOption === "option1"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={props.selectedOption === "option2"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={props.selectedOption === "option3"}
            onChange={props.handleChange}
          />
          Transgender
        </label>
      </div>
    </div>
  );
};

export default Radio_input;
