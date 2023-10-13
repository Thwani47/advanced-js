var animal = {
    kind : 'human'
}
console.log(animal.__proto__)

var john = {}

john.__proto__ = animal

console.log(john.kind)

console.log(animal.isPrototypeOf(john))

var jane = Object.create(animal, {food : {value : 'meat'}})
console.log(jane.kind )
console.log(jane.food)