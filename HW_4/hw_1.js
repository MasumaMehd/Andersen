class Calculator {
  constructor(x, y) {
    if (!this.#isValidNumber(x) || !this.#isValidNumber(y)) {
      throw new Error("Invalid input: x and y must be valid numbers");
    }
    this.x = x;
    this.y = y;

    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  #isValidNumber(num) {
    return typeof num === "number" && !isNaN(num) && num !== Infinity;
  }

  setX(newX) {
    if (!this.#isValidNumber(newX)) {
      throw new Error("Invalid input: x must be a valid number");
    }
    this.x = newX;
  }

  setY(newY) {
    if (!this.#isValidNumber(newY)) {
      throw new Error("Invalid input: y must be a valid number");
    }
    this.y = newY;
  }

  logSum() {
    return this.x + this.y;
  }

  logSub() {
    return this.x - this.y;
  }

  logMul() {
    return this.x * this.y;
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return this.x / this.y;
  }
}

const calculator = new Calculator(10, 5);

console.log(calculator.logSum());
console.log(calculator.logSub());
console.log(calculator.logMul());
console.log(calculator.logDiv());

calculator.setX(20);
calculator.setY(4);
console.log(calculator.logSum());
