
const opening = document.getElementById("opening");
const surprise = document.getElementById("surprise");
const letter = document.getElementById("letter");

document.getElementById("openButton").addEventListener("click", () => {
  opening.hidden = true;
  surprise.hidden = false;
  confettiHearts();
});

document.getElementById("letterButton").addEventListener("click", () => {
  surprise.hidden = true;
  letter.hidden = false;
  confettiHearts();
});

function confettiHearts() {
  const symbols = ["💗", "♡", "✨", "💕"];

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    Object.assign(heart.style, {
      position: "fixed",
      left: Math.random() * 100 + "vw",
      top: "-30px",
      fontSize: 20 + Math.random() * 18 + "px",
      pointerEvents: "none",
      zIndex: 10
    });

    document.body.appendChild(heart);

    const animation = heart.animate([
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      {
        transform: `translateY(${innerHeight + 60}px) rotate(360deg)`,
        opacity: 0
      }
    ], {
      duration: 2500 + Math.random() * 2500,
      easing: "linear"
    });

    animation.onfinish = () => heart.remove();
  }
}
