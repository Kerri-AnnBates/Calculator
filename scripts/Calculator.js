class Calculator {
    #operand1;
    #operand2;
    #total;

    constructor(operand1, operand2) {
        this.#operand1 = operand1;
        this.#operand2 = operand2;
    }

    get operand1() {
        return this.#operand1;
    }

    set operand1(operand1) {
        this.#operand1 = operand1;
    }

    get operand2() {
        return this.#operand2;
    }

    set operand2(operand2) {
        this.#operand2 = operand2;
    }

    get total() {
        return this.#total;
    }

    set total(total) {
        this.#total = total;
    }

    add() {
        this.#total = this.#operand1 + this.#operand2;
        return this.#total;
    }

    subtract() {
        this.#total = this.#operand1 - this.#operand2;
        return this.#total;
    }

    multiply() {
        this.#total = this.#operand1 * this.#operand2;
        return this.#total;
    }

    divide() {
        if (this.#operand2 == 0) {
            return console.log("cannot divide by 0");
        }

        this.#total = this.#operand1 / this.#operand2;
        return this.#total;
    }

    clearAll() {
        this.#operand1 = 0;
        this.#operand2 = 0;
        this.#total = 0;
    }

}

export default Calculator;