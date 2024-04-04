// import { useState } from "react";
import "./App.css";
import "./styles/testimonial.css";

const Button = (props) => {
  // console.log(props);
  return (
    <>
      <button className={`btn ${props.className}`}>{props.children}</button>
    </>
  );
};

function drawNumber() {
  const $screen = document.getElementById("main");
  document.addEventListener("click", (e) => {
    // console.log(e.target);
    console.log(e.target.textContent);
    console.log($screen);
    // $screen.value = e.target.textContent;
  });
}

function App() {
  return (
    <>
      <h1>Vite + React Calculator</h1>
      <div className="App">
        <div className="container">
          <div className="screen">
            <input type="number" dir="rtl" name="" id="main" />
            <input type="number" name="" id="" disabled />
          </div>
          <div className="btn-container">
            <div className="row">
              <Button className="clean">C</Button>
              <Button className="function">()</Button>
              <Button className="function">%</Button>
              <Button className="function">÷</Button>
            </div>
            <div className="row">
              <Button onClick={drawNumber()}>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button className="function">×</Button>
            </div>
            <div className="row">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button className="function">-</Button>
            </div>
            <div className="row">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button className="function">+</Button>
            </div>
            <div className="row">
              <Button>+/-</Button>
              <Button>0</Button>
              <Button>.</Button>
              <Button className="eq-funct">=</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
