"use strict";

var x = 10;

console.log(global.x);

function moo(){
    var y = 10;
    console.log(global.y);
}

moo()

{
    var x = "hello";
}

console.log(x);

{
    const a = "hello";
}
console.log(a)

for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i)

/* JS Hoisting */

console.log(a);
let a = 10;

sayHello()

function sayHello (){
    console.log("Hello")
}