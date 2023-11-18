function logEvent(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.eventPhase);
}

function cleanlog(e) {
  console.clear(e);
}

document.querySelector("body").addEventListener("click", logEvent);
document.querySelector(".log").addEventListener("click", logEvent);
document.querySelector(".clean").addEventListener("click", cleanlog);
