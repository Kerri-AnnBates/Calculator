class Calculator {
    #total;

    constructor() {
        this.#total = 0;
    }

    get total() {
        return this.#total;
    }

    set total(total) {
        this.#total = total;
    }

    add(num) {
        this.#total += num;
        return this.#total;
    }

    subtract(num) {
        this.#total -= num;
        return this.#total;
    }

    multiply(num) {
        this.#total *= num;
        return this.#total;
    }

    divide(num) {
        if (num == 0) {
            console.log("cannot divide by 0");
            return;
        } else {
            this.#total /= num;
        }

        return this.#total;
    }

    clearAll() {
        this.#total = 0;
    }

}

export default Calculator;