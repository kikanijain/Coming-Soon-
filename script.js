// BizVoice Coming Soon page interactions
const loader = document.getElementById("loader");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Keep the logo-inspired loader visible briefly, then reveal the page.
window.addEventListener("load", () => {
  window.setTimeout(() => loader.classList.add("is-hidden"), 1150);
});

// If a visitor follows an in-page link before the loader has faded,
// the page remains keyboard- and screen-reader-friendly.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    loader.classList.add("is-hidden");
  });
});
