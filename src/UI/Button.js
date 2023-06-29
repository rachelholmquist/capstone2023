import React from "react";
import "./Button.css"

const Button = (props) => {
  return (
    <button
      className='main-btn'
    >
        {props.children}
    </button>
  );
};

export default Button;
