import React, { useState } from "react";

const Keypad = ({ onKeypadClick, onBackspaceClick }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleNumberClick = (number) => {
    if (Number.isInteger(Number(number))){
    if (inputValue === "0" && number !== ".") {
      // 첫 번째 숫자가 0이고 소수점이 아닌 경우, 입력값을 대체
      setInputValue(number);
    } else {
      setInputValue(inputValue + number);
    }}
  };

  const handleBackspaceClick = () => {
    if (inputValue !== "" && inputValue !== 0){
    setInputValue(inputValue.slice(0, -1));
    }
    else{
        setInputValue(0);
    }
  };

  const handleNextClick = () => {
    onKeypadClick(inputValue);
  };


  return (
    <>
    <div className="px-2 py-6">
    <p className="text-5xl font-semibold dark:text-white text-gray-900">
      {inputValue}코인
    </p>
  </div>
    <div className="keypad">

      <div className="keypad-row w-full grid grid-cols-3">
        <button
          onClick={() => handleNumberClick("1")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          1
        </button>
        <button
          onClick={() => handleNumberClick("2")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          2
        </button>
        <button
          onClick={() => handleNumberClick("3")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          3
        </button>
      </div>
      
      <div className="keypad-row w-full grid grid-cols-3">
        <button
          onClick={() => handleNumberClick("4")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          4
        </button>
        <button
          onClick={() => handleNumberClick("5")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          5
        </button>
        <button
          onClick={() => handleNumberClick("6")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          6
        </button>
      </div>
      <div className="keypad-row w-full grid grid-cols-3">
        <button
          onClick={() => handleNumberClick("7")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          7
        </button>
        <button
          onClick={() => handleNumberClick("8")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          8
        </button>
        <button
          onClick={() => handleNumberClick("9")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          9
        </button>
      </div>
      <div className="keypad-row w-full grid grid-cols-3">
        <button
          onClick={() => handleBackspaceClick()}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          &larr;
        </button>
        <button
          onClick={() => handleNumberClick("0")}
          className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95"
        >
          0
        </button>
        <button className="keypad-button py-4 text-2xl hover:bg-gray-300 dark:hover:bg-gray-700 transform ease-in duration-100 active:scale-95">
          
        </button>
      </div>
    </div>
    </>
  );
};

export default Keypad;
