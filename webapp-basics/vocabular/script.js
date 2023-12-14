const inputField = document.getElementById("input");
const output = document.getElementById("output");
const addForm = document.getElementById("add-form");
const clearButton = document.getElementById("clear-btn");

// State
let vocabulary = [];
function saveVocabulary() {
  localStorage.setItem("vocabulary", JSON.stringify(vocabulary));
}

function loadVocabulary() {
  const savedString = localStorage.getItem("vocabulary");
  if (savedString == null) {
    return;
  }
  vocabulary = JSON.parse(savedString);
}

// render
function onStateChange() {
  saveVocabulary();
  render();
}

function render() {
  // Tisch abräumen
  output.innerHTML = "";

  for (const word of vocabulary) {
    const listItem = document.createElement("li");
    listItem.textContent = word.description;
    output.append(listItem);
  }
}

// Event Listener
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = inputField.value;
  //console.log("Submit", deutsch);

  // 1. State updaten
  vocabulary.push({
    description: input,
  });

  console.log(vocabulary);

  // 2. Rerender triggern
  onStateChange();
});

clearButton.addEventListener("click", () => {
  // 1. State update

  vocabulary = [];

  // 2. Rerender triggern
  onStateChange();
});

loadVocabulary();
render();
