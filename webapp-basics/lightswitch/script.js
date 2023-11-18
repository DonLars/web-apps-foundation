const doc = document;
const background = document.querySelector("body");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let dark = false;

  if (document.title !== "Good Night") {
    background.classList.add("body-dark");
    btn.classList.add("dark");
    btn.innerText = "Turn the lights on!";

    document.title = "Good Night";
  } else if (document.title === "Good Night") {
    background.classList.remove("body-dark");
    btn.classList.remove("dark");
    btn.innerText = "Turn the lights off!";

    document.title = "Good Morning";
  }
});
