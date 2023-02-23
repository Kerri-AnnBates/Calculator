import Calculator from "./Calculator.js";

const calc = new Calculator();

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");
let val = "";
let query = "";
screen.value = calc.number1;

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

calc.number1 = 3;
calc.number2 = 3;
calc.add();
console.log(calc.total);