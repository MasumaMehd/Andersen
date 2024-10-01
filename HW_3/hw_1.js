const myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;
  if (
    typeof current === "number" &&
    typeof last === "number" &&
    current < last
  ) {
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  } else {
    let error = false;
    return {
      next() {
        if (!error) {
          error = true;
          return {
            done: false,
            value: "Error",
          };
        } else {
          return { done: true };
        }
      },
    };
  }
};

for (let item of myIterable) {
  console.log(item);
}
