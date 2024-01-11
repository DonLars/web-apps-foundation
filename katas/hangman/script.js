"use strict";

function loadWord() {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => response.json())
    .then((data) => {
      const htmlOutput = document.querySelector(".output");
      //console.log(data[0]);
      state.currentWord = data[0].toUpperCase();
      render();
    })
    .catch((error) => {
      console.error("Error displaying the word:", error);
    });
}

document.querySelector(".random button").addEventListener("click", loadWord);

// state

const state = {
  status: ["active", "win", "lose"],
  fails: 0, // 0 from 10
  tries: 10,
  currentWord: "",
  //fetchWord: data;
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
  guessedLetters: [],
  letters: [
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
  ],
};

// Variables for status, output
const htmlStatus = document.querySelector(".status");
const htmlOutput = document.querySelector(".output");
const htmlFalse = document.querySelector(".fails-count");
const htmlNewBtn = document.querySelector(".new button");

const htmlBase = document.querySelector(".hangman .base");
const htmlPole = document.querySelector(".hangman .pole");
const htmlShaft = document.querySelector(".hangman .shaft");
const htmlRope = document.querySelector(".hangman .rope");
const htmlHead = document.querySelector(".hangman .head");
const htmlBody = document.querySelector(".hangman .body");
const htmlLefthand = document.querySelector(".hangman .left-hand");
const htmlRighthand = document.querySelector(".hangman .right-hand");
const htmlLeftleg = document.querySelector(".hangman .left-leg");
const htmlRightleg = document.querySelector(".hangman .right-leg");

/*    RESET (new game, random word, reset fails)
========================================================================== */

function reset() {
  state.fails = 0;
  state.guessedLetters = [];

  // reset status

  htmlStatus.classList.remove("win");
  htmlStatus.classList.remove("lose");

  // reset the keyboard
  const buttons = document.querySelectorAll(".keyboard ul li button");
  for (const button of buttons) {
    button.classList.remove("hidden");
  }
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

for (const letter of state.letters) {
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

  console.log(
    state.currentWord,
    state.guessedLetters,
    htmlOutput.textContent,
    state.status[0],
    state.fails
  );

  return htmlOutput;
}

/*    EVENT LISTENER for mouse
========================================================================== */

ul.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.tagName === "BUTTON") {
    const guessedLetter = event.target.textContent;
    handleGuess(guessedLetter);
  }
});

/*    EVENT-LISTENER for keys
  ========================================================================== */
document.addEventListener("keydown", function (event) {
  console.log(event);
  const guessedLetter = event.key.toUpperCase();
  handleGuess(guessedLetter);
});

/*    FUNCTION - handle guessed letters
  ========================================================================== */
function handleGuess(guessedLetter) {
  // Test if guessedLetter is a-z
  if (!/^[a-zA-Z]$/.test(guessedLetter)) {
    console.log("Invalid input. Please only enter letters between a-z");
    return;
  }

  // Test, if guessed Letter is in the searched word
  if (!state.currentWord.includes(guessedLetter)) {
    // If less than 10 tries

    switch (state.fails) {
      case 0:
        state.fails++;
        htmlBase.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 1:
        state.fails++;
        htmlPole.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 2:
        state.fails++;
        htmlShaft.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 3:
        state.fails++;
        htmlRope.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 4:
        state.fails++;
        htmlHead.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 5:
        state.fails++;
        htmlBody.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 6:
        state.fails++;
        htmlLefthand.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 7:
        state.fails++;
        htmlRighthand.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 8:
        state.fails++;
        htmlLeftleg.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      case 9:
        state.fails++;
        htmlRightleg.style.visibility = "visible";
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
        break;
      default:
        state.fails++;
        htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
      // code block
    }

    /*  --- ORGINAL without hangman visualisation ---
    if (state.fails < 10) {
      state.fails++;
      htmlFalse.textContent = ` ${state.fails} / ${state.tries}`;
    }*/
  }

  // deactivate pressed letter
  const button = document.querySelector(
    `.${guessedLetter.toLowerCase()} button`
  );
  if (button) {
    button.className = "hidden";
  }

  state.guessedLetters.push(guessedLetter);

  render(); // Rendering

  // TEST IF WIN OR LOSE
  checkForWinOrLose();
}

/*    FUNCTION WIN/LOSE
========================================================================== */
function checkForWinOrLose() {
  const buttons = document.querySelectorAll(".keyboard ul li button");
  let currentWordUnderscore = state.currentWord.split("").join(" ").trim();

  if (htmlOutput.textContent === currentWordUnderscore) {
    htmlStatus.textContent = state.status[1]; // "WIN"
    htmlStatus.classList.add("win");
    console.log(state.status[1]);
    for (const button of buttons) {
      button.classList.add("hidden");
    }
  } else if (state.fails >= 10) {
    htmlStatus.textContent = state.status[2]; // "LOSE"
    htmlStatus.classList.add("lose");
    console.log(state.status[2]);
    for (const button of buttons) {
      button.classList.add("hidden");
    }
  }
}

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
