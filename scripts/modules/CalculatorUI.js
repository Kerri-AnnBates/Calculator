import Calculator from "./Calculator.js";

class CalculatorUI {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.displayScreen = document.querySelector("#screen");
        this.prevNumber = 0;
        this.currNumber = 0;
        this.operator = null;
        this.operatorSelected = false;
        this.calc = new Calculator(this.prevNumber, this.currNumber, 0, this.operator);
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
            console.log("I'm an operator", key);
            console.log("Current number is", this.currNumber);
            console.log("Previous number is", this.prevNumber);

            this.handleOperatorClick(key);
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
        } else if (this.operatorSelected) {
            if (isDecimal) {
                this.displayScreen.value = "0" + key;
            } else {
                this.displayScreen.value = key;
            }
            this.operatorSelected = false;
        } else {
            this.displayScreen.value += key;
        }
    }

    handleOperatorClick(key) {
        this.operatorSelected = true;

        // first time selecting operator
        if (this.calc.operator == null) {
            this.calc.operator = key;
            this.handleOperatorChange(key, this.currNumber);
        } else {
            // Check if we're just switching operator
            if (this.calc.operator !== key) {
                console.log("Changed operator");
                this.handleOperatorChange(key, this.prevNumber);
            } else {
                this.calc.num1 = this.prevNumber;
                this.calc.num2 = this.currNumber;
            }

            this.calc.operator = key;
            // this.calc.num1 = this.prevNumber;
            // this.calc.num2 = this.currNumber;
        }

        this.prevNumber = this.calc.calculate();
        this.displayScreen.value = this.prevNumber;

    }

    handleOperatorChange(operator, savedNumber) {
        if (operator == "*" || operator == "/") {
            this.calc.num1 = savedNumber;
            this.calc.num2 = 1;
        } else {
            this.calc.num1 = savedNumber;
            this.calc.num2 = 0;
        }
    }
}

export default CalculatorUI;