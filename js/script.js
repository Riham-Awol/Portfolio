// ===================== Data: projects pulled from GitHub =====================
const projects = [
  {
    name: "E-Commerce",
    icon: "🛒",
    desc: "A modern, responsive, professional B2B e-commerce web application for a beverage distribution company.",
    tags: ["TypeScript", "Web App"],
    url: "https://github.com/Riham-Awol/E-Commerce",
    private: false,
  },
  {
    name: "Ri-Pay",
    icon: "💳",
    desc: "A payment switch that simulates bank transactions between a bakery and its customers.",
    tags: ["JavaScript", "Fintech"],
    url: "https://github.com/Riham-Awol/Ri-Pay",
    private: false,
  },
  {
    name: "Family Matrimonial Site",
    icon: "💍",
    desc: "Two families, two hearts, one future — discover a future spouse through family, faith, values, culture, education and character.",
    tags: ["JavaScript", "Full-Stack"],
    url: "https://github.com/Riham-Awol/family-matrimonial-site",
    private: false,
  },
  {
    name: "Business Authenticator",
    icon: "✅",
    desc: "A platform that authenticates businesses and lists them, so people can tell which ones are legit and which are fake.",
    tags: ["JavaScript", "Directory"],
    url: "https://github.com/Riham-Awol/business-authenticator",
    private: false,
  },
  {
    name: "WeTech HR Scheduling",
    icon: "🗓️",
    desc: "An HR scheduling system for managing weekly employee schedules, attendance planning, and shift selection, with exports to Excel/Sheets.",
    tags: ["HTML", "Dashboard"],
    url: "https://github.com/Riham-Awol/wetech-hr-scheduling",
    private: false,
  },
  {
    name: "AFUR Management System",
    icon: "📦",
    desc: "A web app that helps businesses manage products, inventory, sales, customers, suppliers and purchases with real-time stock tracking and reports.",
    tags: ["Full-Stack", "Dashboard"],
    url: "https://github.com/Riham-Awol/Afur-import-plc",
    private: false,
  },
  {
    name: "Inventory Management",
    icon: "🏷️",
    desc: "A user-friendly system to track and manage stock levels, sales, and purchases in real time, with automated updates and detailed reporting.",
    tags: ["JavaScript", "Dashboard"],
    url: "https://github.com/Riham-Awol/inventory-management-web-app",
    private: false,
  },
  {
    name: "TicketPro",
    icon: "🎟️",
    desc: "A one-stop platform for discovering, booking, and managing tickets to concerts, sports, theater, and special events with secure payments.",
    tags: ["JavaScript", "Booking"],
    url: "https://github.com/Riham-Awol/ticket-website",
    private: false,
  },
  {
    name: "Dashomes Call Center",
    icon: "☎️",
    desc: "A call center operations platform built with TypeScript for managing calls and workflows.",
    tags: ["TypeScript", "Dashboard"],
    url: "https://github.com/Riham-Awol/dashomes-callcenter",
    private: false,
  },
  {
    name: "Game Hub",
    icon: "🎮",
    desc: "A collection of fun, interactive, mobile-responsive games — perfect for playing solo or with friends, straight in the browser.",
    tags: ["HTML", "Games"],
    url: "https://github.com/Riham-Awol/Game-Hub",
    private: false,
  },
];

// ===================== Render projects =====================
const grid = document.getElementById("projectsGrid");
grid.innerHTML = projects
  .map(
    (p, i) => `
    <article class="project-card reveal" style="transition-delay:${(i % 6) * 0.06}s">
      <div class="project-top">
        <div class="project-icon">${p.icon}</div>
        <div class="project-links">
          <a href="${p.url}" target="_blank" rel="noopener" aria-label="View ${p.name} on GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/></svg>
          </a>
        </div>
      </div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        ${p.private ? `<span class="project-private">Private</span>` : ""}
      </div>
    </article>
  `
  )
  .join("");

// ===================== Nav: scrolled state + active link + mobile toggle =====================
const navWrap = document.querySelector(".nav-wrap");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const scrollProgress = document.getElementById("scrollProgress");

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

const sections = document.querySelectorAll("main section, main#home");
const linkMap = new Map();
document.querySelectorAll(".nav-link").forEach((link) => {
  linkMap.set(link.getAttribute("href").slice(1), link);
});

function onScroll() {
  navWrap.classList.toggle("scrolled", window.scrollY > 12);

  const doc = document.documentElement;
  const scrolled = (doc.scrollTop) / (doc.scrollHeight - doc.clientHeight);
  scrollProgress.style.width = `${Math.min(100, Math.max(0, scrolled * 100))}%`;
}
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const link = linkMap.get(id);
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

// ===================== Scroll reveal =====================
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

// ===================== Typed role text =====================
const roles = [
  "Full-Stack Developer",
  "Computer Science Student",
  "UI/UX Enthusiast",
  "Problem Solver",
];
const typedEl = document.getElementById("typed");
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

// ===================== Animated counters =====================
const counters = document.querySelectorAll(".stat-num");
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
counters.forEach((c) => counterObserver.observe(c));

// ===================== Footer year =====================
document.getElementById("year").textContent = new Date().getFullYear();

// ===================== Subtle tilt on project cards =====================
document.addEventListener("mousemove", (e) => {
  const card = e.target.closest(".project-card");
  document.querySelectorAll(".project-card").forEach((c) => {
    if (c !== card) {
      c.style.transform = "";
    }
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
