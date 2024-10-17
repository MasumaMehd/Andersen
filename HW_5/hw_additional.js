class Stack {
  constructor(maxSize = 10) {
    if (
      typeof maxSize !== "number" ||
      maxSize <= 0 ||
      !Number.isInteger(maxSize)
    ) {
      throw new Error("Invalid maximum stack size.");
    }

    this.maxSize = maxSize;
    this.storage = {};
    this.size = 0;
  }

  push(elem) {
    if (this.size >= this.maxSize) {
      throw new Error("Stack is full.");
    }

    this.storage[this.size] = elem;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("The stack is empty.");
    }

    this.size--;

    const value = this.storage[this.size];

    delete this.storage[this.size];
    return value;
  }

  peek() {
    return this.isEmpty() ? null : this.storage[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];

    for (let i = 0; i < this.size; i++) {
      result.push(this.storage[i]);
    }

    return result;
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("Provided entity is not iterable.");
    }

    const stack = new Stack(iterable.length);

    for (const item of iterable) {
      stack.push(item);
    }
    
    return stack;
  }
}

const myStack = new Stack(5);
myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); 
console.log(myStack.toArray());
