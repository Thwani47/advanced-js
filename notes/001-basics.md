### Misc JS Info

- JS is more of an agreement
- The [TC39](https://github.com/tc39) committee is responsible for deciding on and publishing JS features
- [caniuse.com](https://caniuse.com), [node.green](https://node.green)
- JS is backward compatible

### Compilation vs Polyfilling
- A compiler allows us to write/run the latet features of JS that can run in older browsers or JS engines
- [Babel](https://babeljs.io) is one example of a compiler
- You cannot add a feature by compiling.
    - If a feature is not available in an older browser version, it will not be available even after compiling
    - For these cases we need to use Polyfilling
- Polyfills allows us to run new features in older browsers
- Polyfills first check if the browser supports the feature and then uses the browser's implementation if it exists and it uses its own implementation if it doesn't

### Use Strict
- Strict mode allows us to place a program or a function in a strict context
```js
// place this at the top of the file to make the entire file strict/
    "use strict";
```
```js
// only code inside the function is in strict mode and everything else is not
function myFunc() {
    "use strict";
    // code
}
```
- strict mode helps make debugging easier
- we can't assign values to unassigned variables in strict mode
- strict mode prevents us from creating accidental globals or using reserverd keywords as variable names
- strict mode makes `eval` safer. for example, we can escape bugs like this
```js
"use strict";
var x = 2;
eval ("var x = 10");
console.log(x) // prints 2. (prints 10 when not in strict mode)
```

### Variables
- JS passes primitive types (string, number, booleans) by value and passes objects by reference
```js
var a = 1;

function foo(a){
    a = 2; // this is a new variable that is scoped to the function
}

foo(a)
console.log(a) // prints 1
```
```js
var person = {
    name : 'John Doe',
    age : 12, 
}

function changeAge(person){
    person.age = 20;
}

changeAge(person)
console.log(person.age) // 20
```
- We can't change what an object points to but we can change a property or an a property to an object. For example,
```js
var person = {
    name : 'John Doe',
    age : 12, 
}

function changePerson(person){
    person = {name : 'Jane Doe', age : 22}
}

changePerson(person)
console.log(person); // { name : 'John Doe', age: 12 }
```
### Rest operator
- Introduced in ES6
- Collapses a number of elements into a single array
- All function arguments get passed to a secret property called `arguments`
```js
function foo(a, b){
    console.log(arguments)
}

foo(1, 2, 3,4) // { '0': 1, '1': 2', '2': 3, '3': 4}
```
```js
function sum() {
  let total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 4, 5));
```
- `arguments` is not an array, therefore `arguments.slice(1)` will not work. We can do something like `Array.prototype.slice.call(arguments,1)`.
- The `rest operator` uses the ... (triple dot syntax)
- The `...` represents the "rest" of the parameters
- The rest parameter must be the last parameter
```js
function login(method, ...options){
    console.log(method)
    console.log(options) // the rest of the parameters are collapsed into an array and we can use array methods on 'options'
}
login("twitter", 1, 2,3, 4)// "twitter", [1, 2, 3, 4]
```
### Spread operator
- The spread operator also uses the `...` (triple dot syntax)
- The spread operator expands an array into its elements
```js
var arr = [1, 2, 3, 4]
var arr2 = [2, 4, 6, 8, ...arr]
console.log(arr2) // [2, 4, 6, 8, 1, 2, 3, 4]
console.log([2, 4, ...arr, 6, 8]) // [2, 4, 1, 2, 3, 4, 6, 8]
```
- rest operator and spread operator are similar operators used in different contexts. We can use both in the same example
```js
var twitterLogin = "twitter";
var twitterOptions = ["key", "callbackUrl"];

function login(method, ...options){ // rest operator
    console.log(method);
    console.log(options);
}

login(twitterLogin, ...twitterOptions); // spread operator
```

### Template literals (strings)
- One first use case is for multi-line strings
- We can put expressions in strings
- We use backticks for template strings
```js
var name = "Jane Doe";
var message = `this 
is 
a 
test for ${name}`;

console.log(message);
```
```js
var name = "Jane Doe";
var isBold = false;
var message = `this 
is 
a 
test for ${isBold ? name.toUpperCase() : name}`;

console.log(message);
```
- template literals allow us to place a tag before a string
- a tag is a function that can be used to modify the string
```js

function h1(strings){
    return "<h1>" + strings[0] + "</h1>"
}

console.log(h1`John Doe`); // <h1>John Doe</h1>
```