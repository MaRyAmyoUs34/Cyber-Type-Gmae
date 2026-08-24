let score = 0;
const wordList= ["FIREWALL", "MATRIX", "CYBER", "NEBULA", "STARSHIP", "ECLIPSE", "QUANTUM", "PHISHING", "MALWRE", "DATABASE", "STEALTH","AVATR"]
<h2>TIME LEFT: <span id="timer">60</span>s</h2>
const wordElement = document.getElementById("falling-word");
const inputElement = document.getElementById("player-input");
const scoreElement = document.getElementById("score");
inputElement.addEventListener("input", () => {
 if (inputElement.value.toUpperCase() === wordElement.innerText) {
    score = score + 10;
    scoreElement.innerText = score;
    inputElement.value = "";
let randomNum = Math.floor(Math.random() * wordList.length;
wordElement.innerText = wordList[randomNum];
 }
});
