var name = "Jane Doe";
var isBold = false;
var message = `this 
is 
a 
test for ${isBold ? name.toUpperCase() : name}`;

// console.log(message);

function h1(strings, ...values) {
  console.log(strings);
  console.log(values);
  var body = "";
  for (var i = 0; i < strings.length; i++) {
    body += strings[i] + (values[i] || "");
  }
  return "<h1>" + body + "</h1>";
}

console.log(h1`${message}`);
