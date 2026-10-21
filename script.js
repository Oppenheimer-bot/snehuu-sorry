
const lockScreen = document.getElementById("lockScreen");
const mainSite = document.getElementById("mainSite");
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const envelopeBtn = document.getElementById("envelopeBtn");
const envelopeText = document.getElementById("envelopeText");
const letter = document.getElementById("letter");

const forgiveBtn = document.getElementById("forgiveBtn");
const response = document.getElementById("response");
const heartsLayer = document.getElementById("hearts");

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// PASSWORD UNLOCK
passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value.trim().toLowerCase() === "sneha") {
    lockScreen.classList.add("hidden");
    mainSite.classList.remove("hidden");
    passwordError.textContent = "";
    window.scrollTo(0, 0);
  } else {
    passwordError.textContent =
      "Aree Snehuu, password chukla ga 🥺 Try again!";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

// OPEN AND CLOSE THE LETTER
envelopeBtn.addEventListener("click", function () {
  const isClosed = letter.classList.contains("hidden");

  if (isClosed) {
    letter.classList.remove("hidden");
    envelopeText.textContent = "Majha letter tujhya sathi ❤️";
    envelopeBtn.querySelector(".envelope").textContent = "💝";
    envelopeBtn.setAttribute("aria-expanded", "true");

    setTimeout(function () {
      letter.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });
    }, 100);

    burstHearts();
  } else {
    letter.classList.add("hidden");
    envelopeText.textContent = "Punha ughadaycha tar tap kar ❤️";
    envelopeBtn.querySelector(".envelope").textContent = "💌";
    envelopeBtn.setAttribute("aria-expanded", "false");
  }
});

// FLOATING HEARTS
function createHeart() {
  if (reducedMotion || !heartsLayer) return;

  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 12 + Math.random() * 19 + "px";
  heart.style.animationDuration = 7 + Math.random() * 7 + "s";

  heartsLayer.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 14500);
}

if (!reducedMotion) {
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 350);
  }

  setInterval(createHeart, 850);
}

function burstHearts() {
  if (reducedMotion) return;

  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 70);
  }
}

// FORGIVENESS BUTTON
let clicked = false;

forgiveBtn.addEventListener("click", function () {
  clicked = !clicked;

  if (clicked) {
    response.textContent =
      "Thank you ga, majha aiklyabaddal ❤️ " +
      "Mi majhya actions madhun pan dakhven.";

    forgiveBtn.textContent = "Ek mothi hug ghe na 🤗";
    burstHearts();
  } else {
    response.textContent =
      "Take your time ga Snehuu, mi tujh aikayla aahe. ❤️";

    forgiveBtn.textContent =
      "Will you forgive me, Snehuu? 🥺";
  }
});
