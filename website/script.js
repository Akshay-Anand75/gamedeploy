let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (!guess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
    } else if (guess < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
    } else {
        message.textContent = "📈 Too high! Try again.";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
}
