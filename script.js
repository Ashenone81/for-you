document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const openBtn = document.getElementById("openBtn");
  const pages = document.querySelectorAll(".page");
  const nextButtons = document.querySelectorAll(".next");
  const counter = document.getElementById("counter");
  const dots = document.getElementById("dots");
  const replay = document.getElementById("replay");

  let currentPage = 0;

  function showPage(index) {
    if (index < 0 || index >= pages.length) return;

    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });

    currentPage = index;

    if (counter) {
      counter.textContent =
        String(index + 1).padStart(2, "0") +
        " / " +
        String(pages.length).padStart(2, "0");
    }

    if (dots) {
      dots.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  }

  // Create page dots
  if (dots) {
    pages.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "dot";
      dot.setAttribute("aria-label", `Page ${index + 1}`);

      dot.addEventListener("click", () => {
        showPage(index);
      });

      dots.appendChild(dot);
    });
  }

  // Open the website
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      intro.classList.add("hidden");
      site.classList.remove("hidden");
      showPage(0);
    });
  }

  // Next page buttons
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showPage(currentPage + 1);
    });
  });

  // Replay
  if (replay) {
    replay.addEventListener("click", () => {
      site.classList.add("hidden");
      intro.classList
