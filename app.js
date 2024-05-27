let randomNumber = +Math.floor(Math.random() * 10);

const form = document.getElementById("form");
const attempts = document.getElementById("attempts");
const record = document.getElementById("record");
const wrapper = document.getElementById("wrapper");
const resultText = document.getElementById("center-text");
const btnInput = document.getElementById("btn-input");
const reset = document.getElementById("again");
const startGame = document.getElementById("start");

const numberInput = document.getElementById("input");

reset.addEventListener("click", () => {
  attempts.textContent = "Attempts: 0";
  let randomNumber = +Math.floor(Math.random() * 10);
  startGame.style.display = "block";
  wrapper.classList.remove("bg-red-700", "bg-green-600");
  wrapper.classList.add("bg-blue-950");
  resultText.textContent = "Guess my number";
  numberInput.toggleAttribute("disabled", "");
  btnInput.toggleAttribute("disabled", "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let son = numberInput.value;
  startGame.style.display = "none";

  if (randomNumber < son) {
    resultText.textContent = "Too height!";
    wrapper.classList.remove("bg-blue-950");
    wrapper.classList.add("bg-red-700");
  } else if (randomNumber > son) {
    resultText.textContent = "Too low!";
    wrapper.classList.remove("bg-blue-950");
    wrapper.classList.add("bg-red-700");
  } else {
    resultText.textContent = "You Win!";
    wrapper.classList.remove("bg-blue-950");
    wrapper.classList.remove("bg-red-700");
    wrapper.classList.add("bg-green-600");
    numberInput.setAttribute("disabled", "");
    btnInput.setAttribute("disabled", "");
  }
});
// for (let i = 0; i <= 10; i++) {
btnInput.addEventListener("click", () => {
  attempts.textContent = `Attempts: ${i}`;
  console.log(i);
});
// }
