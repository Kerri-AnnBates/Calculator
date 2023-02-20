import Calculator from "./Calculator.js";

const calc = new Calculator();

console.log(calc instanceof Calculator);

calc.operand1 = 3;
calc.operand2 = 3;
console.log(calc.add());
calc.clearAll();
console.log(calc.add());