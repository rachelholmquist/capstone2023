import React from "react";
import "./Button.css"

const Button = (props) => {
  return (
    <button
      className="main-btn"
      type={props.type || "button"}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
        {props.children}
    </button>
  );
};

export default Button;
