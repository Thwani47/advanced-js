"use strict";

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};


function Professional(honorific, firstName, lastName){
    Person.call(this, firstName, lastName);
    this.honorific = honorific;
}

Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professionalName = function(){
    return `${this.honorific} ${this.firstName} ${this.lastName}`;
}

var john = new Professional("Dr.", "John", "Doe");
console.log(john.professionalName());
console.log(john.fullName());