function getPersons(name, age) {
  return [
    { name, age },

    Object.assign(Object.create({}), { name, age }),

    new Object({ name, age }),

    Object.create(
      {},
      {
        name: { value: name, enumerable: true },
        age: { value: age, enumerable: true },
      }
    ),

    new (function () {
      this.name = name;
      this.age = age;
    })(),

    Object.defineProperties(
      {},
      {
        name: {
          value: name,
          writable: true,
          enumerable: true,
          configurable: true,
        },
        age: {
          value: age,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      }
    ),

    Object.setPrototypeOf({ name, age }, null),

    (() => ({ name, age }))(),

    JSON.parse(JSON.stringify({ name, age })),
  ];
}
console.log(getPersons("Masuma", 21));
