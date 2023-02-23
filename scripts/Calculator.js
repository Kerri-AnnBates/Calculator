class Calculator {
    #number1;
    #number2;
    #total;

    constructor() {
        this.#number1 = 0;
        this.#number2 = 0;
        this.#total = 0;
    }

    get number1() {
        return this.#number1;
    }

    set number1(number1) {
        this.#number1 = number1;
    }

    get number2() {
        return this.#number2;
    }

    set number2(number2) {
        this.#number2 = number2;
    }

    get total() {
        return this.#total;
    }

    set total(total) {
        this.#total = total;
    }

    add() {
        this.#total = this.#number1 + this.#number2;
    }

    subtract() {
        this.#total = this.#number1 - this.#number2;
    }

    multiply() {
        this.#total = this.#number1 * this.#number2;
    }

    divide() {
        if (this.#number1 == 0) {
            console.log("cannot divide by 0");
            return;
        } else {
            this.#total = this.#number1 / this.#number2;
        }
    }

    clearAll() {
        this.#number1 = 0;
        this.#number2 = 0;
        this.#total = 0;
    }

}

export default Calculator;