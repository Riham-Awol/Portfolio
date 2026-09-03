/* Homepage-only behavior: project grid, typed role text, counters, active-nav tracking, tilt. */
document.addEventListener("DOMContentLoaded", () => {
  // ---- Render project grid ----
  const grid = document.getElementById("projectsGrid");
  if (grid) {
    grid.innerHTML = window.PROJECTS.map(
      (p, i) => `
      <article class="project-card reveal" style="transition-delay:${(i % 6) * 0.06}s">
        <a href="projects/${p.slug}.html" class="project-card-link">
          <div class="project-top">
            <div class="project-icon">${p.icon}</div>
            <span class="project-arrow" aria-hidden="true">→</span>
          </div>
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </a>
      </article>
    `
    ).join("");
  }

  // ---- Active nav link tracking (scrollspy) ----
  const linkMap = new Map();
  document.querySelectorAll(".nav-link").forEach((link) => {
    linkMap.set(link.dataset.id, link);
  });
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = linkMap.get(entry.target.id);
          if (link) {
            document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active-link"));
            link.classList.add("active-link");
          }
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id], main#home").forEach((s) => sectionObserver.observe(s));

  // ---- Reveal (after grid is injected) ----
  window.initRevealObserver();

  // ---- Typed role text ----
  const roles = ["Full-Stack Developer", "Computer Science Student", "Frontend & Backend Engineer", "Problem Solver"];
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIndex--;
        typedEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? 40 : 75);
    }
    typeLoop();
  }

  // ---- Animated counters ----
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1400;
        const start = performance.now();

        function step(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll(".stat-num").forEach((c) => counterObserver.observe(c));

  // ---- Subtle tilt on project cards ----
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".project-card");
    document.querySelectorAll(".project-card").forEach((c) => {
      if (c !== card) c.style.transform = "";
    });
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });
  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".project-card").forEach((c) => (c.style.transform = ""));
  });
});
