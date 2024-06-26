import "./App.css";
import Button from "./components/button.jsx";
import Screen from "./components/screen.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const showInput = (value) => {
    setInput(input + value);
  };

  const calcResult = () => {
    /* Changing symbols to valid MathJS ones */
    let exp = input;
    if (input.includes("÷")) {
      exp = input.replace("÷", "/");
    }
    if (input.includes("×")) {
      exp = input.replace("×", "*");
    }

    /* Adding close parenthesis by default */
    if (input.includes("(") && !input.includes(")")) {
      exp = input + ")";
    }

    setInput(evaluate(exp));
  };

  return (
    <>
      <h1>Vite + React Calculator</h1>
      <div className="App">
        <div className="container">
          <Screen input={input} handleChange={showInput} />
          <div className="btn-container">
            <div className="row">
              <Button handleClick={() => setInput("")}>C</Button>
              <Button>()</Button>
              <Button>%</Button>
              <Button handleClick={showInput}>÷</Button>
            </div>
            <div className="row">
              <Button handleClick={showInput}>7</Button>
              <Button handleClick={showInput}>8</Button>
              <Button handleClick={showInput}>9</Button>
              <Button handleClick={showInput}>×</Button>
            </div>
            <div className="row">
              <Button handleClick={showInput}>4</Button>
              <Button handleClick={showInput}>5</Button>
              <Button handleClick={showInput}>6</Button>
              <Button handleClick={showInput}>-</Button>
            </div>
            <div className="row">
              <Button handleClick={showInput}>1</Button>
              <Button handleClick={showInput}>2</Button>
              <Button handleClick={showInput}>3</Button>
              <Button handleClick={showInput}>+</Button>
            </div>
            <div className="row">
              <Button>+/-</Button>
              <Button handleClick={showInput}>0</Button>
              <Button>.</Button>
              <Button handleClick={calcResult}>=</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
