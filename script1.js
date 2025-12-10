// pour la partie presentation
const textArray = [
  "Bienvenue à l'École Espoirs d'Afrique.",
  "Une institution dédiée à l'excellence éducative.",
  "Nous formons les leaders de demain.",
  "Rejoignez-nous dans cette aventure d'apprentissage."
];

let i = 0; // phrase
let j = 0; // caractère
let currentText = "";
let isDeleting = false;
const speed = 100; // vitesse de frappe

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
    setTimeout(typeEffect, 2000); // pause avant suppression
  } 
  else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % textArray.length; // passer à la phrase suivante
    setTimeout(typeEffect, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

