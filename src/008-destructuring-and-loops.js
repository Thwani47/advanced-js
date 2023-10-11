"use strict";

const arr = ["John", 20];
const [name, age, street = "123 Main St", city = "New York", state = "NY"] =
  arr;
console.log(name);
console.log(age);
console.log(street);

const obj = {
  name: "John",
  age: 20,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};

for (let prop in obj) {
  console.log(prop, obj[prop]);
}
