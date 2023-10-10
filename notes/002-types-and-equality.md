### JS Types
- JS primitive types are
    - string
    - number
    - boolean
    - null
    - undefined
- JS non-primitive types are
    - object
- JS is dynamically-typed language
- `undefined` means "no value"
    - Used for variables that have not been initialized or missing parameters to a function
    - Also used for unkown properties of an object
- `null` is used by the developer to indicate "no value"

### Equality in JS
- `==` is the equality operator
- `===` is the strict equality operator
    - This checks for both the value equality and type equality
```js
0 === 0 // true
0 === '0' // false
'1' == 1 // true
'1' === 1 // false
```
- In non-strict equality, JS will try to convert the operands to the same type and then compare them
    - [JS Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)

### NaN - Not a Number
- `typeof(NaN) -> 'number'`
- NaN compared to anything is false, including itself
- use the `isNaN()` function to check if a value is NaN
- You check if a value is not a number by checking if it is equal to itself
```js
var a = NaN;
a !== a // true. This is only true for the NaN type
```
```
