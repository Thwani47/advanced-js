### Prototype chain
- Every object has a prototype, which is another object that it "inherits" properties from
- The prototype object has its own prototype, and so on, until an object is reached with `null` as its prototype
```js
var animal = {
    kind : 'human'
}

console.log(animal.__proto__); // {}

var jonn = {}
john.__proto__ = animal;

console.log(john.kind); // human
console.log(animal.isPrototypeOf(john)); // true
```
- prototype properties are dynamic
```js
var animal = {
    kind : 'human'
}

var jonn = {}
john.__proto__ = animal;

animal.kind = 'dog';
console.log(john.kind); // dog
```
- Updating a property that previously didn't exist on the prototype will add it to the object and not on the prototype
```js
var animal = {
    kind : 'human'
}

var jonn = {}
john.__proto__ = animal;

john.kind = 'dog';
console.log(john.kind); // dog
console.log(animal.kind); // human
```
- We can use `Object.create` to create an object with a specific prototype
```js
var animal = {
    kind : 'human'
}

var john = Object.create(animal);
console.log(john.kind); // human
```
- We can also add custom properties to the object using the `Object.create()` method
```js
var animal = {
    kind : 'human'
}

var john = Object.create(animal, {
    food : {value : 'meat'}
});

console.log(john.kind); // human
console.log(john.food); // meat
```

### Difference between prototypal and classical inheritance
- In classical inheritance, we have classes and instances of those classes
- In prototypal inheritance, we have objects and other objects that inherit from those objects
    - New objects are created from existing objects

### Classical inheritance
- In classical inheritance, we have a `new` keyword to create new instances of classes
- All inheritance in JS is based on objects. The `constructor` based inheritance is just a syntactic sugar to make it seem like classical inheritance 
- JS does not have the concept of a class. We use functions to create objects
```js
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var john = new Person('John', 'Doe');
console.log(john.firstName); // John

// this is equivalent to
var john = {}
Person.call(john, 'John', 'Doe');
console.log(john.firstName); // John
```
- We can add methods to the `Person` function
```js
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

var john = new Person('John', 'Doe');
console.log(john.fullName()); // John Doe
```
- We can also add methods to the `Person` function using the `prototype` property
```js
Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}
```
- The prototype approach is convenient when we have a lot of methods and has memory benefits
- The `prototype` property is an object that is shared among all instances of the `Person` function
- We can use closures to simulate private variables
```js
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return firstName + ' ' + lastName;
    }
}

var john = new Person('John', 'Doe');
john.firstName = 'Jane';
console.log(john.fullName()); // John Doe
```
- We cannot do this with the prototype approach
- We can simulate inheritance as follows
```js
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

function Student(firstName, lastName, grade){
    Person.call(this, firstName, lastName);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype); // 

var john = new Student('John', 'Doe', 8);
console.log(john.fullName()); // John Doe
```

### Prototypal inheritance
- We can use the `Object.create()` method to create objects that inherit from other objects
```js
var Person = {
    init : function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
    },
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var john = Object.create(Person);
john.init('John', 'Doe')
console.log(john.fullName())
```
- We can also use the `Object.create()` method to create objects that inherit from other objects and add custom properties
```js
var Person = {
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var john = Object.create(Person, {firstName : {value : 'John'}, lastName : {value : 'Doe'}});
console.log(john.fullName())
```
- We can also create a factory function to create objects
```js
var Person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

function PersonFactory(firstName, lastName) {
  var person = Object.create(Person);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

var john = PersonFactory("John", "Doe");
console.log(john.fullName());
```
- With prototypal inheritance, we just keep on adding to the prototype chain to create inheritance
```js
var Person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};


var Professional = Object.create(Person);

var john  = Object.create(Professional, {firstName : {value : 'John'}, lastName : {value : 'Doe'}});
console.log(john.fullName()); // John Doe
```
- An ES6 class is just syntactic sugar for prototypal inheritance. It can extend a prototypal function