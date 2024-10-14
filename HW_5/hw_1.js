class Stack {
  constructor(maxSize = 10) {
    if (
      typeof maxSize !== number ||
      maxSize <= 0 ||
      !Number.isInteger(maxSize)
    ) {
      throw new Error("Invalid maximum stack size.");
    }

    this.maxSize = maxSize;
    this.storage = [];
  }

  push(elem) {
    if (this.storage.length <= this.maxSize) {
      throw new Error("Stack is full.");
    }
    this.storage.push(elem);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("The stack is empty");
    }
    return this.storage.pop();
  }

  peek() {
    // if (this.isEmpty()) {
    //   return null;
    // }
    // return this.storage[this.storage.length - 1];

    return this.isEmpty() ? null : this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  toArray() {
    return [...this.storage];
  }
}
