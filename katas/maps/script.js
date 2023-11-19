// Working with Map objects

/* const numbersOfAlbums = new Map();
numbersOfAlbums.set("Kyuss", 4);
numbersOfAlbums.set("Tool", 6);
numbersOfAlbums.set("Monster Magnet", 8);
numbersOfAlbums.set("Ben Harper", 9);
numbersOfAlbums.set("Queens of the Stone Age", 6);
 */

const numbersOfAlbums = new Map()
  .set("Kyuss", 4)
  .set("Tool", 6)
  .set("Monster Magnet", 8)
  .set("Ben Harper", 9)
  .set("Queens of the Stone Age", 6);

console.log(numbersOfAlbums.get("Kyuss"));
console.log(numbersOfAlbums.size);
console.log(numbersOfAlbums.has("Ben Harper"));
console.log(numbersOfAlbums.delete("Ben Harper"));
console.log(numbersOfAlbums.has("Ben Harper"));

for (let artists of numbersOfAlbums.keys()) {
  console.log(artists);
}

const numbers = [13, 52, 84, 42, 85];
numbers.name = "Zahlenarray";

console.log(numbers);

for (let number of numbersOfAlbums.values()) {
  console.log(number);
}

for (let entry of numbersOfAlbums.entries()) {
  console.log("key: " + entry[0]);
  console.log("value: " + entry[1]);
}
//destrukturierte Zuweisung
for (let [bandName, numberOfAlbums] of numbersOfAlbums.entries()) {
  console.log(bandName);
  console.log(numbersOfAlbums);
}

/* 
numbersOfAlbums.clear();
console.log(numbersOfAlbums.size);

// for in / of 

for (let i in numbers) {
  console.log(i);
}

for (let i of numbers) {
  console.log(i);
}
 */
