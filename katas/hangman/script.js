"use strict";

/*
Check: Choose a random word out of 10 given words (use 10 words that you learned in the bootcamp or that are coding related)
Each letter can only be picked once
Picked letters are disabled on the displayed keyboard
Add a "New Game" button that will pick a new word and resets the failed attempts
If you have 10 failes (failed attempts picking a letter) the game is over
    
*/

// state

const state = {
  status: ["active", "win", "lose"],
  fails: 0, // 0 from 10
  tries: 10,
  words: [
    "Github",
    "Markdown",
    "Currentcolor",
    "Cascade",
    "Mediaquery",
    "Flexbox",
    "Transition",
    "Datatype",
    "Condition",
    "Object",
  ],
  currentWord: "",
  guessedLetters: [],
};

// Variables for status, output
const htmlStatus = document.querySelector(".status");
const htmlOutput = document.querySelector(".output");
const htmlFalse = document.querySelector(".fails-count");
const htmlNewBtn = document.querySelector(".new button");

const letters = [
  ["_", "A"],
  ["_", "B"],
  ["_", "C"],
  ["_", "D"],
  ["_", "E"],
  ["_", "F"],
  ["_", "G"],
  ["_", "H"],
  ["_", "I"],
  ["_", "J"],
  ["_", "K"],
  ["_", "L"],
  ["_", "M"],
  ["_", "N"],
  ["_", "O"],
  ["_", "P"],
  ["_", "Q"],
  ["_", "R"],
  ["_", "S"],
  ["_", "T"],
  ["_", "U"],
  ["_", "V"],
  ["_", "W"],
  ["_", "X"],
  ["_", "Y"],
  ["_", "Z"],
];

/*    RESET (new game, random word, reset fails)
========================================================================== */

function reset() {
  state.fails = 0;
  state.guessedLetters = [];
  // generate random word
  const roundWord = Math.ceil(Math.random() * state.words.length);
  state.currentWord = state.words.at(roundWord - 1).toUpperCase();
  //  console.log(state.currentWord, state.status, state.fails);
  htmlStatus.textContent = state.status[0];
  htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
}

/*    GENERATE KEYBOARD TEMPLATE
========================================================================== */

const ul = document.querySelector(".keyboard ul");

function generateKey(key) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const lowerKey = key[1].toLowerCase();
  button.classList.add(lowerKey);
  li.classList.add(lowerKey);
  button.textContent = key[1];

  ul.appendChild(li);
  li.appendChild(button);
}

for (const letter of letters) {
  generateKey(letter);
}

/*    CURRENT WORD STATUS
========================================================================== */

function getCurrentWordStatus() {
  let currWord = "";

  for (let i = 0; i < state.currentWord.length; i++) {
    const currentLetter = state.currentWord[i];
    if (state.guessedLetters.includes(currentLetter)) {
      currWord += currentLetter;
    } else {
      currWord += "_";
    }
  }
  return currWord.split("").join(" ").trim();
}

/*    RENDER
========================================================================== */

function render() {
  htmlOutput.textContent = getCurrentWordStatus(); // Clear the output before rendering
  return htmlOutput;
}

/*    EVENT LISTENER for button click
========================================================================== */

// ul.addEventListener("keydown", function (event) {
//     console.log(event.key + " " + event.metaKey);
//   });

ul.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.tagName === "BUTTON") {
    const guessedLetter = event.target.textContent;
    state.guessedLetters.push(guessedLetter);

    // deactivate button
    event.target.className = "hidden";
    // Check if guessed letter is in the current word
    if (!state.currentWord.includes(guessedLetter)) {
      // Handle game over logic if fails reach 10
      if (state.fails < 10) {
        state.fails++;
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;

        // if won

        let currentWordUnderscore = state.currentWord
          .split("")
          .join(" ")
          .trim();

        if (htmlOutput.textContent == currentWordUnderscore) {
          htmlStatus.textContent = "WIN";
          console.log(state.status[1]);
        }
      } else {
        htmlStatus.textContent = "LOSE";
        console.log(state.status[2]);
      }
    }

    console.log(
      state.currentWord,
      state.guessedLetters,
      htmlOutput.textContent,
      state.status[0],
      state.fails
    );

    render(); // Update the displayed word
  }
});

/*    EVENT LISTENER for New Game / Reset
========================================================================== */
htmlNewBtn.addEventListener("click", function () {
  reset();
  render();
});

/*    Initialize
========================================================================== */

reset();
render();
