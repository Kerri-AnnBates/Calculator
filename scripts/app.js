import Calculator from "./Calculator.js";

const calc = new Calculator(0, 0, 0, null);

const buttons = document.querySelectorAll("button");
let screen = document.querySelector("#screen");

let operatorClick = false;
screen.value = calc.num1;

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

        // Get numbers
        if (!operator && !action) {
            console.log("I'm a number!");
            const isDecimal = screen.value.indexOf(".");

            if (screen.value == 0 || operatorClick) {
                screen.value = key;
            } else {
                screen.value += key;
            }

            if (calc.operator == null) {
                calc.num1 = isDecimal ? parseFloat(screen.value) : parseInt(screen.value);
            } else {
                calc.num2 = isDecimal ? parseFloat(screen.value) : parseInt(screen.value);
            }

            operatorClick = false;
            console.log("num1 is: ", calc.num1);
            console.log("num2 is: ", calc.num2);
        }

        // Get operator
        if (operator) {
            console.log("I'm an operator!");
            operatorClick = true;
            calc.operator = key;
            calc.num1 = calc.calculate();
            screen.value = calc.total;
        }

        // Get other actions
        if (action) {
            console.log("I'm an action!");
            if (key == "clear") {
                calc.clearAll();
                screen.value = calc.total;
            }

            if (key == "=") {
                calc.calculate();
                screen.value = calc.total;
                calc.num1 = calc.total;
                calc.num2 = 0;
                console.log("totaL: ", calc.total);
            }

            if (key == "delete") {
                let str = screen.value;
                str = str.substr(0, str.length - 1);

                if (operatorClick) {
                    // then we update num2
                    calc.num2 = parseFloat(str);
                } else {
                    //we update num1
                    calc.num1 = parseFloat(str);
                }

                screen.value = str;
            }
        }
    });
});


// number1 is initially 0;
// calc.num2 = 3;
// calc.operator = "+";
// calc.num1 = calc.calculate();
// console.log("total: ", calc.total);
// calc.num2 = 2;
// calc.operator = "+";
// calc.num1 = calc.calculate();

// console.log("total: ", calc.total);