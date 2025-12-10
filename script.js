const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

function openMenu() {
  mobileMenu.classList.remove("hidden");
  setTimeout(() => {
    mobileMenu.classList.remove("translate-x-full");
  }, 10);
}

function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
  }, 300);
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openMenu();
});

closeMenu.addEventListener("click", closeMobileMenu);

// Fermer si clic sur un lien
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

// Fermer si clic à l’extérieur
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    if (!mobileMenu.classList.contains("hidden")) {
      closeMobileMenu();
    }
  }
});
