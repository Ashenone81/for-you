document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");
  const openBtn = document.getElementById("openBtn");
  const pages = document.querySelectorAll(".page");
  const nextButtons = document.querySelectorAll(".next");
  const counter = document.getElementById("counter");
  const dots = document.getElementById("dots");
  const replay = document.getElementById("replay");

  let current = 0;

  function showPage(index) {
    current = index;

    pages.forEach((page, i) => {
      page.classList.toggle("active", i === current);
    });

    counter.textContent =
      String(current + 1).padStart(2, "0") +
      " / " +
      String(pages.length).padStart(2, "0");
  }

  // Create page dots
  pages.forEach((_, i) => {
    const dot = document.createElement("button");

    dot.className = "dot";

    dot.addEventListener("click", () => {
      showPage(i);
    });

    dots.appendChild(dot);
  });

  const dotButtons = dots.querySelectorAll(".dot");

  function updateDots() {
    dotButtons.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  // Open the website
  openBtn.addEventListener("click", () => {
    intro.classList.add("opened");
    site.classList.remove("hidden");
    showPage(0);
    updateDots();
  });

  // Next page buttons
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (current < pages.length - 1) {
        showPage(current + 1);
        updateDots();
      }
    });
  });

  // Replay
  replay.addEventListener("click", () => {
    site.classList.add("hidden");
    intro.classList.remove("opened");
    showPage(0);
    updateDots();
  });

  // Start on page 1
  showPage(0);
  updateDots();
});
