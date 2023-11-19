"use strict";
// Regex tests

const regEx = new RegExp("abcde"); // constructorfunction
const searchRegex = /ab.def|xyz/; // literal (dot = joker, pipe = "OR")
//console.log(searchRegex.test("abcdefghijklmnopqrstuvwxyz")); // truexs

const phone = /............./;

console.log(phone.test("49 30 1234567"));
console.log(phone.test("49 30 12345")); // noch enough
console.log(phone.test("49 151 27525122"));
