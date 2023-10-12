### `this` keyword in JS
- `this` points to the object that is executing the current function.
- `this` is determined by the calling context
```js
var obj = {
    logThis : function(){
        console.log(this);
    }
}

obj.logThis(); // obj --> This prints obj because obj is calling the function

var func = obj.logThis;
func(); // window --> This prints window because window is calling the function
```
```js
var obj = {
    logThis : function(){
        console.log(this);
        

        function innerFunc(){
            console.log(this);
        }

        innerFunc();
    }
}

obj.logThis(); // obj --> This prints obj because obj is calling the function
// innerFunc() is called by the window object
```
- We can use `"use strcit"` to avoid the above problem 
- We can also stabilize `this` by assigining it to a variable
```js
var obj = {
    logThis : function(){
        var self = this;
        console.log(self);
        

        function innerFunc(){
            console.log(self);
        }

        innerFunc();
    }
}

obj.logThis(); // obj --> This prints obj because obj is calling the function
```

### `call`, `apply` and `bind` methods
- These are different methods used to stabilize `this`
- JavaScript functions are objects. They have properties and methods.
- `call` is a method on every function that allows us to execute the function specifying in what context the function will be executed.
```js
function foo(){
    console.log(this);
}

foo.call(); // 
```
- We can pass an object to `call` method to specify the context
```js
function foo(){
    console.log(this);
}

var obj = {
    name : "John Doe"
}

foo.call(obj); // {name: "John Doe"}
```
- We can also pass arguments to the function
```js

var obj = {
    name : "John Doe"
}

function foo(greeting){
    console.log(greeting + " " + this.name);
}
foo.call(obj, "Hello"); // Hello John Doe
```
- `apply` is similar to `call` but it takes an array of arguments
```js
function a(b, c, d){
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);
}

var obj = {
    name : "John Doe"
}

a.call(obj, 1, 2, 3); // {name: "John Doe"} 1 2 3
a.apply(obj, [1, 2, 3]); // {name: "John Doe"} 1 2 3
```
- We use the `apply` function when we want to use an array of arguments
```js
function sum(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = sum.apply(null, values);
console.log(result); // 45


result = sum.call(null, 1, 2, 3);
console.log(result); // 6
```
- `bind` is similar to `call` but it does not execute the function immediately. It returns a new function with the context bound to the object passed to it.
- `bind` is used to create a copy of a function with a specific context
```js
var a = function(){
    console.log(this);
}.bind(1);

a(); // 1

var obj = {
    func : a
}

obj.func(); // 1
```
- `bind` is only application to the function object. This does not work
```js
function(){
    console.log(this);
}.bind(1); // Uncaught SyntaxError: Unexpected token...
```

### Fat arrow functions
- Functions in JS can be passed around as arguments
- Arrow functions are anonymous functions
```js
let add = function(a, b){
    return a + b;
}

// this is equivalent to
let add = (a, b) => {
    return a + b;
}

// or
let add = (a, b) => a + b; // we can omit the return keyword
```
- Arrow functions are useful when we want to stabilize `this`
```js
let obj = {
    name : "John Doe",
    sayLater : function(){
        setTimeout(function(){
            console.log(`${this.name}`);
        }, 1000);
    }
}

obj.sayLater(); // undefined
// this is because the function passed to setTimeout is called by the window object

let obj2 = {
    name : "John Doe",
    sayLater : function(){
        setTimeout(() => {
            console.log(`${this.name}`);
        }, 1000);
    }
}

obj2.sayLater(); // John Doe
```
- Arrow functions do not have their own `this` keyword. They use the `this` keyword of the enclosing function.