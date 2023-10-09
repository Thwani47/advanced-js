// function sum() {
//   let total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

function  sum(...numbers){
    var total = 0;
    for (var index in numbers){
        total += numbers[index]
    }
    return total
}
console.log(sum(1, 2));
console.log(sum(1, 2, 4, 5));


