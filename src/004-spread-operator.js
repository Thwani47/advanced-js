var arr = [1, 2, 3, 4]
var arr2 = [2, 4, 6, 8, ...arr]
console.log(arr2)
console.log([2, 4, ...arr, 6, 8]) 

var twitterLogin = "twitter";
var twitterOptions = ["key", "callbackUrl"];

function login(method, ...options){ // rest operator
    console.log(method);
    console.log(options);
}

login(twitterLogin, ...twitterOptions); // spread operator