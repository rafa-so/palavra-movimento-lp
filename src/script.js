// Minimal JS. Keeps room for future features.
(function () {
  // Respect reduced motion for any future animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }
})();
