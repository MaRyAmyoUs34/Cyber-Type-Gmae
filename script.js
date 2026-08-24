let score = 0;
const wordsList = ["BREACH", "OVERRIDE", "SIGNAL", "UPGRADE", "ACCESS", "BYPASS", "LAUNCH", "VECTOR", "TURBO", "STATIC"];

const wordElement = document.getElementById("falling-word");
const inputElement = document.getElementById("player-input");
const scoreElement = document.getElementById("score");

// This function checks your typing automatically
inputElement.addEventListener("input", function() {
let typedText = inputElement.value.trim().toUpperCase();
let targetText = wordElement.innerText.trim().toUpperCase();

if (typedText === targetText) {
score = score + 10;
scoreElement.innerText = score;
inputElement.value = ""; // Clears the box

// Pick a random word
let randomNum = Math.floor(Math.random() * wordsList.length);
wordElement.innerText = wordsList[randomNum];
}
});
