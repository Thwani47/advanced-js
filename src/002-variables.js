var a = 1;

function foo(a){
    a = 2;
}

foo(a)
console.log(a)

var person = {
    name : 'John Doe',
    age : 12, 
}

function changePerson(person){
    person = {name : 'Jane Doe', age : 12}
}

changePerson(person)
console.log(person)

