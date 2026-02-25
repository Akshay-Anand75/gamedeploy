const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");

let score = 0;
let timeLeft = 30;
let timer;
let gameActive = false;

function moveBox() {
    const maxX = gameArea.clientWidth - box.clientWidth;
    const maxY = gameArea.clientHeight - box.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}

box.addEventListener("click", () => {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

startBtn.addEventListener("click", () => {
    if (gameActive) return;

    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    gameActive = true;

    moveBox();

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            alert("Game Over! Your Score: " + score);
        }
    }, 1000);
});
