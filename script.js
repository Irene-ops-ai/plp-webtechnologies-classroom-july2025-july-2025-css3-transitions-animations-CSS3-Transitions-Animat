/* ============================
   PART 2: FUNCTIONS, SCOPE, PARAMETERS, RETURN VALUES
   ============================ */

// Global variable
let globalNumber = 10;

/**
 * Adds two numbers and also includes a global number.
 * Demonstrates parameters, return value, and scope.
 */
function addNumbers(a, b) {
  let sum = a + b + globalNumber; // sum uses both local + global
  return sum;
}

// Display result in <p>
document.getElementById("sumResult").textContent =
  "Sum Example (10 + 20 + global 10): " + addNumbers(10, 20);


/* ============================
   PART 3: INTEGRATING CSS + JS
   ============================ */

const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

/**
 * Toggles a CSS class on an element.
 * @param {HTMLElement} element - The element to modify
 * @param {string} className - The class to toggle
 */
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Trigger box animation when button clicked
animateBtn.addEventListener("click", function() {
  toggleClass(box, "animate");  // slide + rotate
  toggleClass(box, "pulsing");  // pulse effect
});
