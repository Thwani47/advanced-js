### Destructuring
- Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
- We can destructure object properties and assign them to variables
```js
const obj = {
    name: "John",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

const {name, age, address: {street, city, state}} = obj;
console.log(name); // John
console.log(age); // 20
```
- We can give the destructure object properties and assign them to different variables
```js
const obj = {
    name: "John",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

const {name: firstName, age: yearsOld, address: {street: st, city: c, state: s}} = obj;
console.log(firstName); // John
console.log(yearsOld); // 20
```
- We can also destructure array elements
```js
const arr = ["John", 20, "123 Main St", "New York", "NY"];
const [name, age, street, city, state] = arr;
console.log(name); // John 
console.log(age); // 20
```
- We can specify default values when destructuring
```js
const arr = ["John", 20];
const [name, age, street = "123 Main St", city = "New York", state = "NY"] = arr;
console.log(name); // John
console.log(age); // 20
console.log(street); // 123 Main St
```

### Looping
- There are 4 different variants of the `for` loop
- We have the traditional `for` loop
```js
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
```
- We can use `return, `break` and `continue` in this  `for` loop type
```js
const array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++){
    if(array[i] === 3){
        break;
    }
    console.log(array[i]);
}

for(let i = 0; i < array.length; i++){
    if(array[i] === 3){
        continue;
    }
    console.log(array[i]);
}

for(let i = 0; i < array.length; i++){
    if(array[i] === 3){
        return;
    }
    console.log(array[i]);
}
```
- We also have the `for each` loop
```js
const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
    console.log(element);
});
```
- We can not use `break` and `continue` in this `for each` loop type
- We also have the `for-in` loop. This is used for iterating over the properties of an object
```js
const obj = {
    name: "John",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

for(let prop in obj){
    console.log(prop); // name, age, address
    console.log(obj[prop]); // John, 20, {street: "123 Main St", city: "New York", state: "NY"}
}
```