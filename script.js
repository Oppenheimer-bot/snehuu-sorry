const heartsLayer = document.getElementById("hearts");
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function createHeart() {
  if (reducedMotion || !heartsLayer) return;

  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 19}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;

  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 14500);
}

if (!reducedMotion) {
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 350);
  }
  setInterval(createHeart, 850);
}

const forgiveBtn = document.getElementById("forgiveBtn");
const response = document.getElementById("response");
let clicked = false;

if (forgiveBtn && response) {
  forgiveBtn.addEventListener("click", () => {
    clicked = !clicked;

    if (clicked) {
      response.textContent =
        "Thank you for hearing my heart, Snehuu. " +
        "I'll show you I'm sorry through my actions, too. 💗";

      forgiveBtn.textContent = "Sending you the biggest hug 🤗";
      burstHearts();
    } else {
      response.textContent =
        "Take all the time you need. I'm here when you're ready. ♡";

      forgiveBtn.textContent = "Will you forgive me? 🥺";
    }
  });
}

function burstHearts() {
  if (reducedMotion) return;

  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 70);
  }
}
