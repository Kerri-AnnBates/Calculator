import Calculator from "./Calculator.js";

class CalculatorUI {
    constructor() {
        this.buttons = document.querySelectorAll('button');
        this.prevNumber = 0;
        this.currNumber = 0;
        this.calc = new Calculator(this.prevNumber, this.currNumber);
        this.events();
    }

    events() {
        this.buttons.forEach(button => button.addEventListener("click", (e) => this.execute(e)));
    }

    execute(e) {
        console.log(e.target);
    }
}

export default CalculatorUI;