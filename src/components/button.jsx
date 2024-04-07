import React from "react";
import "../styles/button.css";

function Button(props) {
  const buttonType = (value) => {
    if (value === "C") return "clean";
    if (value === "=") return "equal";
    if (isNaN(value) && value != "+/-" && value != ".") return "function";
  };

  return (
    <>
      <button className={`btn ${buttonType(props.children)}`}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
