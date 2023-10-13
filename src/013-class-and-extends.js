class Person {
  _firstName = "";
  _lastName = "";

  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

    get lastName() {
        return this._lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    info() {
        return `I'm ${this.fullName()}`;
    }
}

class Student extends Person  {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this._grade = grade;
    }

    info() {
        return `${super.info()} and I'm in grade ${this._grade}`;
    }
}

let john = new Student("John", "Doe", 12);
console.log(john.info());
