const target = document.getElementById("target");
const scoreEl = document.getElementById("score");

let score = 0;

function moveTarget() {
  const x = Math.random() * 360;
  const y = Math.random() * 360;
  target.style.left = x + "px";
  target.style.top = y + "px";
}

target.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
  moveTarget();
});

// initial position
moveTarget();