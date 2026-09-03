/* Populates an individual project detail page from window.PROJECTS, using body[data-slug]. */
document.addEventListener("DOMContentLoaded", () => {
  const slug = document.body.dataset.slug;
  const projects = window.PROJECTS || [];
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) return;

  document.title = `${project.name} — Riham Awol`;

  const set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  set("projIcon", project.icon);
  set("projName", project.name);
  set("projTagline", project.tagline);
  set("projDescription", project.description);
  set(
    "projTech",
    project.tech.map((t) => `<span class="tag">${t}</span>`).join("")
  );
  set(
    "projFeatures",
    project.features.map((f) => `<li>${f}</li>`).join("")
  );

  const githubLink = document.getElementById("projGithub");
  if (githubLink) githubLink.href = project.github;

  // ---- Prev / next project navigation ----
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const prevLink = document.getElementById("projPrev");
  const nextLink = document.getElementById("projNext");
  if (prevLink) {
    prevLink.href = `${prev.slug}.html`;
    prevLink.querySelector(".proj-nav-name").textContent = prev.name;
  }
  if (nextLink) {
    nextLink.href = `${next.slug}.html`;
    nextLink.querySelector(".proj-nav-name").textContent = next.name;
  }

  window.initRevealObserver();
});
