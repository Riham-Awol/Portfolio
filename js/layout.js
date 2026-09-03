/* Shared header + footer, injected into every page (home and project pages). */
(function () {
  const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  function href(base, id) {
    if (document.body.dataset.page === "home") return `#${id}`;
    return id === "home" ? `${base}index.html` : `${base}index.html#${id}`;
  }

  function renderHeader() {
    const mount = document.getElementById("siteHeader");
    if (!mount) return;
    const base = mount.dataset.base || "";
    const isHome = document.body.dataset.page === "home";

    mount.innerHTML = `
      <div class="scroll-progress" id="scrollProgress"></div>
      <nav class="nav container">
        <a href="${base}index.html" class="logo">Riham<span class="dot">.</span></a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          ${NAV_ITEMS.map(
            (item) =>
              `<li><a href="${href(base, item.id)}" class="nav-link${
                isHome && item.id === "home" ? " active-link" : ""
              }" data-id="${item.id}">${item.label}</a></li>`
          ).join("")}
        </ul>
        <a href="${href(base, "contact")}" class="btn btn-small nav-cta">Let's talk</a>
      </nav>
    `;
  }

  function renderFooter() {
    const mount = document.getElementById("siteFooter");
    if (!mount) return;
    const base = mount.dataset.base || "";
    const projects = window.PROJECTS || [];
    const featured = projects.slice(0, 4);

    mount.innerHTML = `
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="${base}index.html" class="logo">Riham<span class="dot">.</span></a>
          <p>Full-Stack Developer building clean, reliable, well-designed web applications.</p>
          <div class="footer-socials">
            <a href="https://github.com/Riham-Awol" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>
            </a>
            <a href="mailto:rihamha1920@icloud.com" aria-label="Email">
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.06 5.6a1.2 1.2 0 0 0 1.48 0l7.06-5.6a.6.6 0 0 0-.3-1.05H4.5a.6.6 0 0 0-.3 1.05Z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navigation</h4>
          <ul>
            ${NAV_ITEMS.map((item) => `<li><a href="${href(base, item.id)}">${item.label}</a></li>`).join("")}
          </ul>
        </div>

        <div class="footer-col">
          <h4>Selected Projects</h4>
          <ul>
            ${featured
              .map((p) => `<li><a href="${base}projects/${p.slug}.html">${p.name}</a></li>`)
              .join("")}
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:rihamha1920@icloud.com">rihamha1920@icloud.com</a></li>
            <li><a href="https://github.com/Riham-Awol" target="_blank" rel="noopener">github.com/Riham-Awol</a></li>
          </ul>
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© <span id="year"></span> Riham Awol. All rights reserved.</span>
        <a href="${href(base, "home")}" class="back-top">Back to top ↑</a>
      </div>
    `;

    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  function wireNav() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    const navWrap = document.querySelector(".nav-wrap");
    const scrollProgress = document.getElementById("scrollProgress");
    if (!navToggle || !navLinks) return;

    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );

    function onScroll() {
      if (navWrap) navWrap.classList.toggle("scrolled", window.scrollY > 12);
      if (scrollProgress) {
        const doc = document.documentElement;
        const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight || 1);
        scrollProgress.style.width = `${Math.min(100, Math.max(0, scrolled * 100))}%`;
      }
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initRevealObserver() {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  }
  window.initRevealObserver = initRevealObserver;

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    wireNav();
  });
})();
