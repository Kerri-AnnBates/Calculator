import Calculator from "./Calculator.js";

class CalculatorUI {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.displayScreen = document.querySelector("#screen");
        this.prevNumber = 0;
        this.currNumber = 0;
        this.operator = null;
        this.prevOperator = this.operator;
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
            this.updateDisplay(key, isDecimal);

            this.currNumber = this.convertIfNumber(this.displayScreen.value);
            this.operatorSelected = false;
        }

        if (isOperator) {
            this.handleOperatorClick(key);
            this.operatorSelected = true;
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
        // Prevent duplicate decimal in display
        if (this.displayScreen.value.indexOf(".") > 0 && isDecimal) {
            return;
        }

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
        } else {
            this.displayScreen.value += key;
        }
    }

    handleOperatorClick(key) {
        this.prevOperator = this.operator;
        this.operator = key;
        console.log("Previous operator", this.prevOperator);

        // first time selecting operator
        if (this.calc.operator == null) {
            this.calc.operator = key;
            this.handleInitialOperatorChange();
        } else {
            // Only update while operator not already selected.
            if (this.operatorSelected == false) {
                this.calc.operator = this.prevOperator;
                this.calc.num1 = this.prevNumber;
                this.calc.num2 = this.currNumber;
            }
        }

        this.prevNumber = this.calc.calculate();
        this.displayScreen.value = this.calc.total.toFixed(2);
        this.prevOperator = key;
    }

    handleInitialOperatorChange() {
        const operator = this.calc.operator;

        if (operator == "*" || operator == "/") {
            this.calc.num1 = this.currNumber;
            this.calc.num2 = 1;
        } else {
            this.calc.num1 = this.currNumber;
            this.calc.num2 = 0;
        }
    }
}

export default CalculatorUI;