// Presentation section
const textArray = [
  "Welcome to Espoirs d'Afrique School.",
  "An institution dedicated to educational excellence.",
  "We shape the leaders of tomorrow.",
  "Join us on this learning journey."
];

let i = 0; // sentence index
let j = 0; // character index
let currentText = "";
let isDeleting = false;
const speed = 100; // typing speed

function typeEffect() {
  const typedText = document.getElementById("typed-text");

  if (!isDeleting && j <= textArray[i].length) {
    currentText = textArray[i].substring(0, j++);
    typedText.textContent = currentText;
    setTimeout(typeEffect, speed);
  } 
  else if (isDeleting && j >= 0) {
    currentText = textArray[i].substring(0, j--);
    typedText.textContent = currentText;
    setTimeout(typeEffect, speed / 2);
  } 
  else if (!isDeleting && j > textArray[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000); // pause before deleting
  } 
  else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % textArray.length; // move to the next sentence
    setTimeout(typeEffect, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
