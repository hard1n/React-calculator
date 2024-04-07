// import { useState } from "react";
import "./App.css";
import Button from "./components/button.jsx";
import Screen from "./components/screen.jsx";

function drawNumber() {
  // const $screen = document.getElementById("main-screen");
  const $btns = document.querySelectorAll(".btn");
  $btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // console.log(e.target);
      console.log(e.target.textContent);
      console.log($btns);
      // $screen.value = e.target.textContent;
    });
  });
  // document.addEventListener("click", (e) => {
  //   // console.log(e.target);
  //   console.log(e.target.textContent);
  //   console.log($btns);
  //   // $screen.value = e.target.textContent;
  // });
}

function App() {
  return (
    <>
      <h1>Vite + React Calculator</h1>
      <div className="App">
        <div className="container">
          <Screen />
          <div className="btn-container">
            <div className="row">
              <Button>C</Button>
              <Button>()</Button>
              <Button>%</Button>
              <Button>÷</Button>
            </div>
            <div className="row">
              <Button onClick={drawNumber()}>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>×</Button>
            </div>
            <div className="row">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
            </div>
            <div className="row">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
            </div>
            <div className="row">
              <Button>+/-</Button>
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
