function checkAgeNotNegative(age) {
  //   const element = document.getElementById("age");
  //   const age = element.value;
  if (age < 0) {
    showMessage("Alter kann nicht negativ sein!");
  }
}

function checkAgeIsNumber(age) {
  //   const element = document.getElementById("age");
  //   const age = element.value;
  if (!(!isNaN(parseFloat(age)) && isFinite(age))) {
    showMessage("Alter muss Zahl sein!");
  }
}

function clearMessage() {
  showMessage("");
}

function showMessage(message) {
  const output = document.getElementById("output");
  output.textContent = message;
}

function getAgeValue() {
  const element = document.getElementById("age");
  const age = element.value;
  return age;
}

function init2() {
  const element = document.getElementById("age");

  element.addEventListener("blur", () => {
    const age = getAgeValue();
    checkAgeIsNumber(age);
  });

  element.addEventListener("blur", () => {
    const age = getAgeValue();
    checkAgeNotNegative(age);
  });
}

function buttonClicked(event) {
  console.log(event.bubbles);
  console.log(event.cancelable);
  console.log(event.currentTarget);
  console.log(event.defaultPrevented);
  console.log(event.eventPhase);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.type);
  console.log(event.isTrusted);
}

function init() {
  const element = document.getElementById("button"); // Button holen
  element.addEventListener("click", buttonClicked, false);
}

document.addEventListener("DOMContentLoaded", init);
