import Calculator from "./Calculator.js";

class CalculatorUI {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.displayScreen = document.querySelector("#screen");
        this.prevNumber = 0;
        this.currNumber = 0;
        this.prevOperator = null;
        this.operatorSelected = false;
        this.equalSelected = false;
        this.calc = new Calculator(this.prevNumber, this.currNumber, 0, this.currOperator);
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
            this.equalSelected = false;
        }

        if (isOperator) {
            this.handleOperatorClick(key);
            this.equalSelected = false;
            this.operatorSelected = true;
        }

        if (isAction) {
            this.handleAction(key);
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
        console.log("Previous operator", this.prevOperator);

        if (this.calc.operator == null) {
            this.handleInitialOperatorChange(key);
        } else if (this.equalSelected) {
            this.changeFromEqualToSelectedOperator(key);
        } else {
            this.updateOperandsAndOperator();
        }

        this.prevNumber = this.calc.calculate();
        this.displayScreen.value = this.calc.total.toFixed(2);
        this.prevOperator = key;
    }

    handleInitialOperatorChange(selectedOperator) {
        this.calc.operator = selectedOperator;
        const operator = this.calc.operator;

        if (operator == "*" || operator == "/") {
            this.calc.num1 = this.currNumber;
            this.calc.num2 = 1;
        } else {
            this.calc.num1 = this.currNumber;
            this.calc.num2 = 0;
        }
    }

    updateOperandsAndOperator() {
        // Only update while operator not already selected.
        if (this.operatorSelected == false) {
            this.calc.operator = this.prevOperator;
            this.calc.num1 = this.prevNumber;
            this.calc.num2 = this.currNumber;
        }
    }

    handleAction(key) {
        if (key == "delete") {
            this.deleteLastNumber();
        }

        if (key == "clear") {
            this.calc.clearAll();
            this.displayScreen.value = this.calc.total;
        }

        if (key == "=") {
            this.updateOperandsAndOperator();
            this.prevNumber = this.calc.calculate();
            this.displayScreen.value = this.calc.total.toFixed(2);
            this.equalSelected = true;
        }
    }

    deleteLastNumber() {
        const display = this.displayScreen.value;

        if (display.length > 1) {
            this.displayScreen.value = display.slice(0, display.length - 1);
        } else {
            this.displayScreen.value = 0;
        }

        this.currNumber = this.convertIfNumber(this.displayScreen.value);
    }

    changeFromEqualToSelectedOperator(operater) {
        this.currNumber = this.calc.total;
        this.handleInitialOperatorChange(operater);
    }
}

export default CalculatorUI;