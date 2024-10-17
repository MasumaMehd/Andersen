class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || maxSize <= 0) {
      throw new Error(
        "Invalid maximum stack size. It must be a positive number."
      );
    }

    this.maxSize = maxSize;
    this.size = 0;
    this.top = null;
  }

  push(elem) {
    if (this.size >= this.maxSize) {
      throw new Error("Stack overflow: cannot add more elements.");
    }

    const newNode = new Node(elem, this.top);

    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow: cannot remove from an empty stack.");
    }

    const value = this.top.value;

    this.top = this.top.next;
    this.size--;
    return value;
  }

  peek() {
    return this.isEmpty() ? null : this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    let arr = [];
    let currentNode = this.top;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr.reverse();
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("The provided argument is not iterable.");
    }

    const stack = new Stack(iterable.length);

    for (const item of iterable) {
      stack.push(item);
    }
    
    return stack;
  }
}

try {
  const stack = new Stack(5);
  stack.push(1);
  stack.push(2);
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.isEmpty());
  console.log(stack.toArray());

  const iterableStack = Stack.fromIterable([10, 20, 30]);
  console.log(iterableStack.toArray());
} catch (error) {
  console.error(error.message);
}
