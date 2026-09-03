export type Project = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  tags: string[];
  description: string;
  features: string[];
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    slug: "e-commerce",
    name: "E-Commerce Platform",
    icon: "🛒",
    tagline: "B2B e-commerce platform for a beverage distribution company",
    tags: ["TypeScript", "Web App"],
    description:
      "A modern, responsive, professional B2B e-commerce web application built for a beverage distribution company. The platform focuses on a clean purchasing flow, clear product presentation, and an interface suited to business buyers rather than a typical consumer storefront.",
    features: [
      "Responsive storefront for desktop and mobile buyers",
      "Structured product catalog built for a distribution business",
      "Clean, professional UI aimed at B2B customers",
      "Built on a modern TypeScript-based stack",
    ],
    tech: ["TypeScript", "React", "Responsive Design"],
    github: "https://github.com/Riham-Awol/E-Commerce",
  },
  {
    slug: "ri-pay",
    name: "Ri-Pay",
    icon: "💳",
    tagline: "Payment switch simulating bank transactions",
    tags: ["JavaScript", "Fintech"],
    description:
      "Ri-Pay is a payment switch that simulates real-world bank transactions between a bakery and its customers, modeling how a transaction moves between a merchant and a financial institution.",
    features: [
      "Simulates an end-to-end payment transaction flow",
      "Models merchant-to-bank communication",
      "Built to explore payment-switch / fintech concepts",
      "JavaScript-based implementation",
    ],
    tech: ["JavaScript", "Node.js", "Fintech"],
    github: "https://github.com/Riham-Awol/Ri-Pay",
  },
  {
    slug: "family-matrimonial-site",
    name: "Family Matrimonial Platform",
    icon: "💍",
    tagline: "Matrimonial platform centered on family, faith and values",
    tags: ["JavaScript", "Full-Stack"],
    description:
      "A matrimonial platform designed around meaningful, values-based connections. Rather than a typical swipe interface, it frames compatibility around family, faith, culture, education and character.",
    features: [
      "Profile-based matching centered on shared values",
      "Emphasis on family and cultural compatibility",
      "Full-stack JavaScript implementation",
      "Thoughtful, values-first user experience",
    ],
    tech: ["JavaScript", "Full-Stack", "UX Design"],
    github: "https://github.com/Riham-Awol/family-matrimonial-site",
  },
  {
    slug: "business-authenticator",
    name: "Business Authenticator",
    icon: "✅",
    tagline: "Verifying and listing legitimate businesses",
    tags: ["JavaScript", "Directory"],
    description:
      "A platform that authenticates businesses and lists them publicly, helping users tell which businesses are legitimate and which are not — built as a trust and verification directory.",
    features: [
      "Business verification and listing workflow",
      "Public directory of authenticated businesses",
      "Focused on trust and transparency",
      "JavaScript-based web application",
    ],
    tech: ["JavaScript", "Directory / Listings"],
    github: "https://github.com/Riham-Awol/business-authenticator",
  },
  {
    slug: "wetech-hr-scheduling",
    name: "WeTech HR Scheduling",
    icon: "🗓️",
    tagline: "Employee scheduling and attendance planning system",
    tags: ["HTML", "Dashboard"],
    description:
      "An HR scheduling system for managing employee weekly schedules, attendance planning, and shift selection. Employees submit availability through an intuitive interface while HR tracks schedules, manages departments, and validates requirements.",
    features: [
      "Employee self-service availability submission",
      "HR dashboard for schedule and department management",
      "Requirement validation for shift coverage",
      "Export to Excel / Google Sheets for reporting",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Dashboard"],
    github: "https://github.com/Riham-Awol/wetech-hr-scheduling",
  },
  {
    slug: "afur-management-system",
    name: "AFUR Management System",
    icon: "📦",
    tagline: "Business management system for inventory and sales",
    tags: ["Full-Stack", "Dashboard"],
    description:
      "A web-based management system that helps a business manage products, inventory, sales, customers, suppliers and purchases in one place, with real-time stock tracking and reporting.",
    features: [
      "Real-time inventory and stock tracking",
      "Sales, supplier and customer management",
      "Authentication and role-based dashboard access",
      "Reporting to support day-to-day decisions",
    ],
    tech: ["Full-Stack", "Dashboard", "Authentication"],
    github: "https://github.com/Riham-Awol/Afur-import-plc",
  },
  {
    slug: "inventory-management",
    name: "Inventory Management System",
    icon: "🏷️",
    tagline: "Real-time stock, sales and purchase tracking",
    tags: ["JavaScript", "Dashboard"],
    description:
      "A user-friendly inventory management system that helps businesses track stock levels, sales, and purchases in real time, with product categorization, automated stock updates, and detailed reporting.",
    features: [
      "Real-time stock level tracking",
      "Product categorization and organization",
      "Automated stock updates on sale or purchase",
      "Reporting to support better decision-making",
    ],
    tech: ["JavaScript", "Dashboard"],
    github: "https://github.com/Riham-Awol/inventory-management-web-app",
  },
  {
    slug: "ticketpro",
    name: "TicketPro",
    icon: "🎟️",
    tagline: "Ticket discovery and booking platform",
    tags: ["JavaScript", "Booking"],
    description:
      "TicketPro is a platform for discovering, booking, and managing tickets to concerts, sports, theater, and special events, with a focus on a smooth booking experience and real-time availability.",
    features: [
      "Event discovery and browsing",
      "Ticket booking with real-time availability",
      "Secure payment flow",
      "Booking management for users",
    ],
    tech: ["JavaScript", "Booking Systems"],
    github: "https://github.com/Riham-Awol/ticket-website",
  },
  {
    slug: "dashomes-callcenter",
    name: "Dashomes Call Center",
    icon: "☎️",
    tagline: "Call center operations dashboard",
    tags: ["TypeScript", "Dashboard"],
    description:
      "A call center operations platform built with TypeScript for managing call workflows and day-to-day operations.",
    features: [
      "Operational dashboard for call center workflows",
      "Built on a modern TypeScript stack",
      "Structured for day-to-day team use",
    ],
    tech: ["TypeScript", "Dashboard"],
    github: "https://github.com/Riham-Awol/dashomes-callcenter",
  },
  {
    slug: "game-hub",
    name: "Game Hub",
    icon: "🎮",
    tagline: "A collection of browser-based, mobile-responsive games",
    tags: ["HTML", "Games"],
    description:
      "A collection of interactive games playable solo or with friends, directly in the browser. Every game is built to be mobile-responsive with no installation required.",
    features: [
      "Multiple standalone browser games in one hub",
      "Mobile-responsive across all games",
      "Runs entirely in-browser, no installation",
      "Built for casual, social play",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Riham-Awol/Game-Hub",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project; next: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}

export function getProjectsByTech(techName: string): Project[] {
  const needle = techName.toLowerCase();
  return projects.filter((p) => p.tech.some((t) => t.toLowerCase().includes(needle)));
}
