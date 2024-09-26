Array.prototype.myFilter = function (callback, obj) {
  const numbers = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(obj, this[i], i, this)) {
      numbers.push(this[i]);
    }
  }

  return numbers;
};

const example = [1, 2, 3, 4];

const FilteredNumbers = example.myFilter(function (n) {
  return n % 2 === 0;
});

console.log(FilteredNumbers);
