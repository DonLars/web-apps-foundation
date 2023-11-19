"use strict";
// Regex tests

const regEx = new RegExp("abcde"); // constructorfunction
const searchRegex = /ab.def|xyz/; // literal (dot = joker, pipe = "OR")
//console.log(searchRegex.test("abcdefghijklmnopqrstuvwxyz")); // truexs

// phone number with joker

/*

d = Ziffer // D = darf keine Ziffer
s = Freiraum // S = darf kein Freiraum
w = Wortzeichen // W = darf kein Wortzeichen

*/

/* const phone = /^\+?\d{2}\s\d{2}\s\d{5,7}$/;

console.log(phone.test("49 30 1234567"));
console.log(phone.test("+49 30 12345")); // too short
console.log(phone.test("49 30 123456789")); // too long
 */

const text = "Die Telefonnummer lautet +49 151 27525122.";
const regExTxt = /\+?\d{2}\s\d{2,3}\s\d{7,8}/;
const result = regExTxt.exec(text);

let newText =
  "Nummer " + result[0] + " gefunden an Index " + result.index + ".";

console.log(newText);

/* const optional = /^abcdef{2,3}$/;
console.log(optional.test("abcde"));
console.log(optional.test("abcdef"));
console.log(optional.test("abcdeffff")); */

/* 
const regNeu = /\Bspiele\B/;

console.log(regNeu.test("Ich bin ein E-Gitarrenspieler"));
 */
// Zeichenklassen

const regEx2 = /[abcde]/;
/* console.log(regEx2.test("a")); // true
console.log(regEx2.test("f")); // false
console.log(regEx2.test("afghij")); // true
console.log(regEx2.test("fghij")); // false
 */

/* const regExWords = /[xyz]/;
const regExWords = /[a-zA-Z]/;
const regExWords = /[^xyz]/; // negation

console.log(regExWords.test("z"));
*/
/* const regExNum = /[0-9]/; //
console.log(regExNum.test("abc"));
 */
