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

        console.log("operated selected:", this.operatorSelected);
        if (isNumber || isDecimal) {
            // console.log("I'm a number. Or decimal");

            // Update numbers in screen
            this.updateDisplay(key, isDecimal);
            this.currNumber = this.convertIfNumber(this.displayScreen.value);
            this.operatorSelected = false;
        }

        if (isOperator) {
            // console.log("I'm an operator", key);
            console.log("Current number is", this.currNumber);
            console.log("Previous number is", this.prevNumber);

            this.operatorSelected = true;
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
            this.handleOperatorChange();
        } else {
            // TODO: Handle change of operator

            this.calc.operator = this.prevOperator;
            this.calc.num1 = this.prevNumber;
            this.calc.num2 = this.currNumber;
        }


        this.prevNumber = this.calc.calculate();
        this.displayScreen.value = this.calc.total;
        this.prevOperator = key;
    }

    handleOperatorChange() {
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