let score = 0;
const wordsList = ["BREACH", "OVERRIDE", "SIGNAL", "UPGRADE", "ACCESS", "BYPASS", "LAUNCH", "VECTOR", "TURBO", "STATIC"];

const wordElement = document.getElementById("falling-word");
const inputElement = document.getElementById("player-input");
const scoreElement = document.getElementById("score");

inputElement.addEventListener("input", function() {
// This removes any hidden spaces or weird characters automatically!
let typedText = inputElement.value.trim().toUpperCase();
let targetText = wordElement.textContent.trim().toUpperCase();

if (typedText === targetText) {
score = score + 10;
scoreElement.innerText = score;
inputElement.value = ""; // Clear the typing box

// Pick a random word from the list
let randomNum = Math.floor(Math.random() * wordsList.length);
wordElement.innerText = wordsList[randomNum];
}
});
