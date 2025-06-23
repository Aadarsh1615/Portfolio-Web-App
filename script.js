// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggleBtn.textContent = document.body.classList.contains("light-theme")
    ? "🌙 Dark Mode"
    : "🌞 Light Mode";
});

// Typing Animation
const phrases = ["Web Developer", "Open Source Contributor", "Tech Explorer"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function typeLoop() {
  const typedText = document.getElementById("typedText");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typedText.textContent = currentPhrase.join("");
    }

    if (isDeleting && j >= 0) {
      currentPhrase.pop();
      j--;
      typedText.textContent = currentPhrase.join("");
    }

    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === phrases.length) i = 0;
    }
  }

  setTimeout(typeLoop, isDeleting ? 50 : 100);
}
typeLoop();

// Scroll Reveal
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);
sections.forEach(section => observer.observe(section));

// Custom Centered Popup
function showMessage() {
  document.getElementById("customPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("customPopup").style.display = "none";
}
