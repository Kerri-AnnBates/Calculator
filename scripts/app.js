import Calculator from "./Calculator.js";

const calc = new Calculator();

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");
let val = "";
let num = 0;
let num2;
screen.value = calc.total;

const operators = {
    "+": 1,
    "-": 2,
    "*": 3,
    "/": 4,
}

const actions = {
    "clear": 1,
    "delete": 2,
    "=": 3
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const key = e.target.dataset.key;
        const operator = operators[key];
        const action = actions[key];

        if (!operator && !action) {
            if (key == ".") {
                console.log("I'm a decimal!");
            } else {
                console.log("Number!");
            }
        }

        if (operator) {
            console.log("I'm an operator!");
        }

        if (action) {
            console.log("I'm an action!");
        }
    });
});

const calculate = (operator) => {
    switch (operator) {
        case 1:
            calc.add();
            break;
        case 2:
            calc.subtract();
            break;
        case 3:
            calc.multiply();
            break;
        case 4:
            calc.divide();
            break;
        default:
            console.log("Invalid operation");
            break;
    }
}

// number1 is initially 0;
num2 = 3;
num = calc.add(num2);
console.log(calc.total);

num2 = 3;
num = calc.add(num2);
console.log(calc.total);

num2 = 3;
num = calc.add(3);
console.log(calc.total);