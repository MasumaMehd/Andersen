class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== 'number' || maxSize <= 0 || !Number.isInteger(maxSize)) {
      throw new Error("Invalid maximum stack size.");
    }

    this.maxSize = maxSize;
    this.storage = [];
  }

  push(elem) {
    if (this.storage.length >= this.maxSize) {
      throw new Error("Stack is full.");
    }
    this.storage.push(elem);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("The stack is empty.");
    }
    return this.storage.pop();
  }

  peek() {
    return this.isEmpty() ? null : this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  toArray() {
    return [...this.storage];
  }

  static fromIterable(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error("Entity is not iterable.");
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

const fromArray = Stack.fromIterable([1, 2, 3, 4]);
console.log(fromArray.toArray());
