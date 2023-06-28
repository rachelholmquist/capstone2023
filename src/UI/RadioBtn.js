import React from "react";
import "./RadioBtn.css"

const Input = (props) => {
    return (
        <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        />
    )
}

export default Input