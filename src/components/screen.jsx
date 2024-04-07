import React from "react";
import "../styles/screen.css";

const Screen = ({ input }) => (
  <div className="screen">
    {/* <input type="number" dir="rtl" name="" id="" /> */}
    <div className="main-screen">{input}</div>
    <div className="temp-screen">{input}</div>
    {/* <input type="number" name="" id="" disabled /> */}
  </div>
);

export default Screen;
