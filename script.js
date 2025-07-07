// === JS Loaded Confirmation ===
console.log("Nightbloom JS loaded");

// === Mobile Nav Toggle ===
function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("open");
}

// Optional: Add event listener for mobile nav button
const navToggleBtn = document.getElementById("navToggleBtn");
if (navToggleBtn) {
  navToggleBtn.addEventListener("click", toggleMenu);
}

// === Launch Quiz (Placeholder) ===
function launchQuiz() {
  alert("Launching your herbal mood quiz… coming soon!");
}

// === Launch Chatbot (Placeholder) ===
function launchChat() {
  alert("Opening the AI Herbalist… coming soon!");
}
