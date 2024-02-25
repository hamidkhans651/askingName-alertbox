"use strict";

let personName: string | null = prompt("What is your name");

if (personName != null && personName !== '') {
    alert(`Hello ${personName}, would you like to use TypeScript?`);
} else {
    alert("You have to fill your name!");
}
