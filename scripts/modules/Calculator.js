class Calculator {
    #num1;
    #num2;
    #total;
    #operator;

    constructor(num1, num2, total, operator) {
        this.#num1 = num1;
        this.#num2 = num2;
        this.#total = total;
        this.#operator = operator;
    }

    get num1() {
        return this.#num1;
    }

    set num1(num) {
        this.#num1 = num;
    }

    get num2() {
        return this.#num2;
    }

    set num2(num) {
        this.#num2 = num;
    }

    get total() {
        return this.#total;
    }

    set total(total) {
        this.#total = total;
    }

    get operator() {
        return this.#operator;
    }

    set operator(operator) {
        this.#operator = operator;
    }

    #add(num1, num2) {
        return num1 + num2;
    }

    #subtract(num1, num2) {
        return num1 - num2;
    }

    #multiply(num1, num2) {
        return num1 * num2;
    }

    #divide(num1, num2) {
        if (num2 == 0) {
            return "Invalid operation! Cannot divide by 0";
        }

        return num1 / num2;
    }

    calculate() {
        switch (this.#operator) {
            case "+":
                this.#total = this.#add(this.#num1, this.#num2);
                break;
            case "-":
                this.#total = this.#subtract(this.#num1, this.#num2);
                break;
            case "*":
                this.#total = this.#multiply(this.#num1, this.#num2);
                break;
            case "/":
                this.#total = this.#divide(this.#num1, this.#num2);
                break;
            default:
                "Invalid operator"
                break;
        }

        console.log("operator: " + this.#operator, "num1: " + this.#num1, " num2: " + this.#num2, "total is: " + this.#total);
        return this.#total;
    }

    clearAll() {
        this.#num1 = 0;
        this.#num2 = 0;
        this.#total = 0;
        this.#operator = null;
    }

}

export default Calculator;