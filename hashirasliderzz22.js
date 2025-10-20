(function() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  let idx = 0;
  const intervalMs = 5000;

  function show(i) {
    slides.forEach((el, j) => el.classList.toggle("active", j === i));
  }

  show(idx);
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    show(idx);
  }, intervalMs);
})();
