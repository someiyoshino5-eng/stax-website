// =========================
// STAX Official Website
// script.js
// =========================

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });
});

// フェードイン
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".feature-card,.roadmap-item,.faq-item,.hero-phone,.screens-grid img"
).forEach(el => {

  el.classList.add("hidden");

  observer.observe(el);

});

// ボタンアニメーション
document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    btn.style.transform = "translateY(-4px)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform = "";

  });

});

// スクロールでヘッダー背景変更
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {

    header.style.background = "rgba(6,8,22,.92)";

  } else {

    header.style.background = "rgba(6,8,22,.72)";

  }

});

// 現在位置ハイライト
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top = section.offsetTop - 120;

    if (pageYOffset >= top) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});

console.log("✅ Stax Official Website Loaded");
