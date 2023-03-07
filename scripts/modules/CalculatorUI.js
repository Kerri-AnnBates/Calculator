import Calculator from "./Calculator.js";

class CalculatorUI {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.displayScreen = document.querySelector("#screen");
        this.prevNumber = 0;
        this.currNumber = 0;
        this.operator = null;
        this.calc = new Calculator(this.prevNumber, this.currNumber);
        this.initDisplay();
        this.events();
    }

    events() {
        this.buttons.forEach(button => button.addEventListener("click", (e) => this.execute(e)));
    }

    execute(e) {
        const isNumber = e.target.className.includes("number");
        const isOperator = e.target.className.includes("operator");
        const isAction = e.target.className.includes("option");
        const isDecimal = e.target.id == "decimal";
        const key = e.target.dataset.key;


        if (isNumber || isDecimal) {
            console.log("I'm a number. Or decimal");

            // Update numbers in screen
            this.updateDisplay(key, isDecimal);
            this.currNumber = this.convertIfNumber(this.displayScreen.value);
        }

        if (isOperator) {
            console.log("I'm an operator");
            console.log("Current number is", this.currNumber);
            console.log("Previous number is", this.prevNumber);
        }

        if (isAction) {
            console.log("I'm an action");
        }
    }

    initDisplay() {
        this.displayScreen.value = this.currNumber;
    }

    convertIfNumber(value) {
        if (isNaN(value)) {
            return value;
        }

        return parseFloat(value);
    }

    updateDisplay(key, isDecimal) {
        if (this.displayScreen.value === "0") {
            if (isDecimal) {
                this.displayScreen.value += key;
            } else {
                this.displayScreen.value = key;
            }
        } else {
            this.displayScreen.value += key;
        }
    }
}

export default CalculatorUI;