const hello = () => {
  console.log("Hello");
};

const greetings = [
  () => console.log("Hola"),
  () => console.log("Bonjour"),
  () => console.log("Halo"),
];

for (f of greetings) {
  f();
}

const area = (radius) => radius ** 2 * Math.PI;

console.log(area(5));

person = {
  name: "Snow",
  firstName: "John",
  getFullName: function () {
    return this.firstName + " " + this.name;
  },
};

console.log(person.getFullName());
