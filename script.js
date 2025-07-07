// === Nightbloom JS Loaded ===
console.log("Nightbloom JS loaded");

// === Mobile Navigation Toggle ===
function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  menu.classList.toggle("open");
}
const navToggleBtn = document.getElementById("navToggleBtn");
if (navToggleBtn) {
  navToggleBtn.addEventListener("click", toggleMenu);
}

// === Cart Logic ===
let cartCount = 0;

function addToCart(item) {
  cartCount += 1;
  const cartCounter = document.getElementById("cart-count");
  if (cartCounter) {
    cartCounter.textContent = cartCount;
  }
  alert(`${item} added to cart!`);
}

// === Launch Mood Quiz ===
function launchQuiz() {
  alert("Launching your herbal mood quiz… coming soon!");
  // Future: open quiz modal or redirect to quiz page
}

// === Launch AI Herbalist (Chatbot) ===
function launchChat() {
  alert("Opening the AI Herbalist… coming soon!");
  // Future: connect to Tidio or chatbot service
}
