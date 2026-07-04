// =========================
// STAX Official Website
// script.js
// =========================

// --- Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// --- Header background on scroll ---
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

// --- Active nav highlight ---
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll("nav a:not(.download-btn)");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}, { passive: true });

// --- Scroll reveal ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  ".feature-card, .roadmap-item, .faq-item, .hero-phone, .screens-grid img, .hf-card"
).forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// --- FAQ accordion ---
document.querySelectorAll(".faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer   = btn.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-q").forEach(b => {
      b.setAttribute("aria-expanded", "false");
      b.nextElementSibling.classList.remove("open");
    });

    if (!expanded) {
      btn.setAttribute("aria-expanded", "true");
      answer.classList.add("open");
    }
  });
});

// --- Hamburger menu toggle ---
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const open = nav.style.display === "flex";
    if (open) {
      nav.removeAttribute("style");
    } else {
      Object.assign(nav.style, {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "70px",
        left: "0",
        right: "0",
        background: "rgba(6,8,22,.97)",
        padding: "20px 24px 24px",
        gap: "18px",
        backdropFilter: "blur(24px)",
      });
    }
  });
}

console.log("Stax Official Website Loaded");
