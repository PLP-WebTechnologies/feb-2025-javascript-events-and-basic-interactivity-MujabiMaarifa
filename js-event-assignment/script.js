// Event fetching file DOM from index.html

const click_me_btn = document.getElementById("clickBtn");
const hover_box = document.getElementById("hoverBox");
const key_input_field = document.getElementById("keyInput");
const secret_btn= document.getElementById("secretBtn");
const color_changer = document.getElementById("colorChanger")
const tab_btn = document.querySelectorAll(".tab-btn")

click_me_btn.addEventListener("click", () => {
    alert("Button clicked!");
  });

hover_box.addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "lightgreen";
  });
  

key_input_field.addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
  });
  

secret_btn.addEventListener("dblclick", () => {
    alert("Secret unlocked!");
  });
  
  // Interactive Elements
const colors = ["red", "green", "blue", "yellow"];

color_changer.addEventListener("click", function () {
    //generating a random number to generate random color
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
  
  // Slideshow implementation
  let slideIndex = 1;
  setInterval(() => {
    slideIndex = (slideIndex % 3) + 1;
    document.getElementById("slideImg").src = `image${slideIndex}.jpg`;
  }, 3000);
  
  // Tabs
  tab_btn.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
      document.getElementById(`tab${btn.dataset.tab}`).style.display = "block";
    });
  });
  
  // Form Validation
  const passwordInput = document.getElementById("password");
  const feedback = document.getElementById("feedback");
  
  passwordInput.addEventListener("input", () => {
    feedback.textContent = passwordInput.value.length >= 8 ? "✅ Strong password" : "❌ Too short";
  });
  
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value;
    const password = passwordInput.value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid || password.length < 8) {
      e.preventDefault();
      alert("Fix form errors before submitting.");
    }
  });
  