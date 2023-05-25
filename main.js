"use strict";

// Variables
let screenValue = "0",
  operand = "",
  operator = "";

// Functions
const updateScreen = () => {
  document.querySelector(".screen").textContent = screenValue;
};

const clearField = () => {
  screenValue = "0";
  operator = "";
  operand = "";
  updateScreen();
};

const appendNum = (num) => {
  screenValue === "0" && num !== "." ? (screenValue = num) : (screenValue += num);
  updateScreen();
};

const appendOpt = (opt) => {
  operator = opt;
  operand = screenValue;
  screenValue += operator;
  updateScreen();
};

const percentOpt = () => {
  console.log(screenValue);
  screenValue /= 100;
  updateScreen();
};

function delNum() {
  screenValue.length === 1 ? (screenValue = "0") : (screenValue = screenValue.slice(0, -1));
  updateScreen();
}

const calc = () => {
  let res;

  try {
    const executeCode = new Function("return " + screenValue);
    res = executeCode();
    res === Infinity ? res = 'Error' : null;
  } catch (error) {
    res = "Error";
  }

  screenValue = res.toString();
  operator = "";
  operand = "";
  updateScreen();
};
