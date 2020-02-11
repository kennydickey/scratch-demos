'use strict';

var items = [];
items.push("banana");
items.push("tomato");
items.push("light saber");
var total = 100.5;
//ex of str trying to inject a dom element
var total2 = "Trying to hijack your site <BR>";

var myUselessFunction = function (strings,...values) {
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += strings[index] + values[index];
  }
  output += strings[index]
  return output;
}

result.innerHTML = myUselessFunction `You have ${items.length} item(s) in your basket for a total of $${total}`;

//----

var myTagFunction = function (strings,...values) {
  var output = "";
  for (var index = 0; index < values.length; index++) {
    var valueString = values[index].toString();

    if (valueString.indexOf(">") !== -1) { // > refers to the dome element carrot
      // Far more complex tests can be implemented here :)
      return "String analyzed and refused!";
    }

    output += strings[index] + values[index];
  }

  output += strings[index]
  return output;
}

result2.innerHTML = myTagFunction `You have ${items.length} item(s) in your basket for a total of $${total2}`;

var myRawFunction = function (strings,...values) {
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += strings.raw[index] + values[index];
  }
  output += strings.raw[index]  // unescaped str values (/n)
  console.log(strings.length, values.length);
  return output;
}

result3.innerHTML = myRawFunction `You have ${items.length} item(s) in your basket\n.For a total of $${total}`;