import Calculator from "./Calculator.js";

class CalculatorUI {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.displayScreen = document.querySelector("#screen");
        this.prevNumber = 0;
        this.currNumber = 0;
        this.operator = null;
        this.calc = new Calculator(this.prevNumber, this.currNumber);
        this.events();
    }

    events() {
        this.buttons.forEach(button => button.addEventListener("click", (e) => this.execute(e)));
    }

    execute(e) {
        // console.log(e);
        const key = e.target.dataset.key;
        const isNumber = e.target.className.includes("number");
        const isOperator = e.target.className.includes("operator");
        const isAction = e.target.className.includes("option");
        const isDecimal = e.target.id == "decimal";

        if (isNumber || isDecimal) {
            console.log("I'm a number. Or decimal");
        }

        if (isOperator) {
            console.log("I'm an operator");
        }

        if (isAction) {
            console.log("I'm an action");
        }

    }
}

export default CalculatorUI;