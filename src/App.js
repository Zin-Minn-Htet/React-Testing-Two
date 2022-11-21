import React, { useState } from "react";
import Button from "./components/Button";
import Output from "./components/Output";
import Input from "./components/Input";

function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  const handleCalculate = (value) => {
    switch (value) {
      case 'C': setInput(0)
        setOutput(0)
        break
      case 'AC': input.lenght == 1 ? setInput(0) : setInput(input.slice(0,input.lenght -1)) 
        break
      case '=': try {
        setOutput(eval(input))
      } catch (e) {
        setOutput(e.message)
      }
        break
      default: input == 0 ? setInput(value) : setInput(input + value)
    }
  }

  return (
    <div className="w-full h-screen bg-gray-700 flex flex-col items-center justify-center">
      <div className="md:w-1/3 mx-auto">
        <Output output={output} />
        <Input input={input} />
        <Button handleCalculate={handleCalculate} />
      </div>
    </div>
  );
}


export default App;