const canvas = document.getElementById("loveGame");
const ctx = canvas.getContext("2d");

let heart = { x: 140, y: 100, size: 40, clicked: false };

function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = heart.clicked ? "#ff1493" : "#ff69b4";
  ctx.beginPath();
  ctx.moveTo(heart.x, heart.y);
  ctx.bezierCurveTo(heart.x, heart.y - 30, heart.x - 50, heart.y - 30, heart.x - 50, heart.y);
  ctx.bezierCurveTo(heart.x - 50, heart.y + 30, heart.x, heart.y + 50, heart.x, heart.y + 70);
  ctx.bezierCurveTo(heart.x, heart.y + 50, heart.x + 50, heart.y + 30, heart.x + 50, heart.y);
  ctx.bezierCurveTo(heart.x + 50, heart.y - 30, heart.x, heart.y - 30, heart.x, heart.y);
  ctx.fill();
}

canvas.addEventListener("click", function (e) {
  if (!heart.clicked) {
    heart.clicked = true;
    drawHeart();
    document.getElementById("result").textContent =
      "Você clicou no meu coração! 💖 Te amo para sempre!";
  }
});

drawHeart();
