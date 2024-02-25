"use strict";
var personName = prompt("What is your name");
if (personName != null && personName !== '') {
    alert("Hello ".concat(personName, ", would you like to use TypeScript?"));
}
else {
    alert("You have to fill your name!");
}
