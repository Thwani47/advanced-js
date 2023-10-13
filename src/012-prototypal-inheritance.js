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
