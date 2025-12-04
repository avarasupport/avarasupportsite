// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Smooth scroll for internal links with [data-scroll] OR nav links
function smoothScrollTo(targetSelector) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72; // offset for sticky header
  window.scrollTo({ top, behavior: "smooth" });
}

document.querySelectorAll("a[href^='#'], button[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const href = el.getAttribute("href");
    const dataScroll = el.getAttribute("data-scroll");
    const target = dataScroll || href;

    if (target && target.startsWith("#") && target.length > 1) {
      e.preventDefault();
      smoothScrollTo(target);

      // Close mobile nav on selection
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
      }
    }
  });
});

// Basic fake submit for demo form (no backend yet)
const demoForm = document.querySelector(".demo-form");
if (demoForm) {
  demoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your interest in Avara! We'll be in touch shortly.");
    demoForm.reset();
  });
}

// Dynamic year for footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
