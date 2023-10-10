### JS Scopes
- Variables declared outside of a function are global variables. They have global scope and can be accessed from anywhere in the code.
- Variables declared within a function are local variables. They have local scope and can only be accessed within that function.
- Variables declared with `var` are function-scoped. This means that if a variable is declared anywhere else besides a function, it will have block scope.
```js
{
    var x = "hello";
}
console.log(x); // hello

for(var i; i < 5; i++){
    console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // 5
```
- Variables declared with `let` and `const` are block-scoped. This means that if a variable is declared anywhere else besides a function, it will have block scope.
```js
{
    let x = "hello";
}
console.log(x); // ReferenceError: x is not defined

for(let i; i < 5; i++){
    console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // ReferenceError: i is not defined
```

### Variable Hoisting
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- JS sepearates the variable declaration and initialization are seperated with the declaration moved to the top of the scope
```js
console.log(x); // undefined. This does not throw an undefined error as one would expect
var x = 5;
```
- Hoisting does not work with variables declared with `let` and `const`
```js
console.log(x); // ReferenceError: x is not defined
let x = 5;

console.log(x); // ReferenceError: x is not defined
const x = 5;
```
- Hoisting also works with functions
```js
sayHello(); // Hello
function sayHello(){
    console.log("Hello");
}
```

### JS Scope Chain
- The scope chain is used to resolve the value of variable names in JS
- A function tries to resolve a variable name by first looking at its own local variables. If it cannot find the variable name, it looks at the variables in the parent function. It continues to do this until it reaches the global scope.


## IIFE (Immediately-Invoked Function Expression)
- An IIFE is a JS function that runs as soon as it is defined
