const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-menu");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

const bubbleField = document.querySelector("#bubbles");
if (bubbleField && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const count = window.innerWidth < 700 ? 10 : 18;
  for (let i = 0; i < count; i += 1) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = 10 + Math.random() * 28;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${10 + Math.random() * 14}s`;
    bubble.style.animationDelay = `${Math.random() * 8}s`;
    bubbleField.appendChild(bubble);
  }
}

const revealTargets = document.querySelectorAll(
  ".intro, .featured, .characters, .trailer-section, .gameplay, .studio, .shot, .gif-frame, .cast"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealTargets.forEach((el) => observer.observe(el));

const header = document.querySelector(".site-header");
let lastY = window.scrollY;
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    if (!header) return;
    header.style.boxShadow = y > 12 ? "0 8px 24px rgba(23, 51, 58, 0.12)" : "none";
    lastY = y;
  },
  { passive: true }
);
