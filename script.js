(function () {
  "use strict";

  var root = document.documentElement;
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");
  var themeBtn = document.getElementById("themeBtn");
  var yearEl = document.getElementById("year");

  var STORAGE_KEY = "dm-theme";

  function preferredTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      );
    }
  }

  applyTheme(preferredTheme());

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {}
    });
  }

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function closeMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.tagName === "A") closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var revealTargets = document.querySelectorAll(
    ".section, .project, .skill-card, .edu-card, .timeline > li, .contact-card"
  );

  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(revealTargets, function (el) {
      el.classList.add("reveal", "in");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  Array.prototype.forEach.call(revealTargets, function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });
})();
