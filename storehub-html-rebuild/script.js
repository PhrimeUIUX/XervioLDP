const features = [
  {
    icon: "./assets/SIRlAbnjhmGQkmD8BkRegxJgb3A.png",
    title: "Truly all-in-one",
    text: "Everything you need, all in one platform.",
  },
  {
    icon: "./assets/JkfLgPdTvDhyegMa20ziVD9lrBU.png",
    title: "User friendly",
    text: "Easy to operate, for owners & staff.",
  },
  {
    icon: "./assets/HyXkVav9FIY6yzTP0vPVobI5U.png",
    title: "Safe & secure",
    text: "Enterprise-grade security for everyone.",
  },
  {
    icon: "./assets/lnwWdbSa1uR2XgiKZzdSKu5xEU.png",
    title: "Integrations",
    text: "Connect to all your existing systems.",
  },
];

const industries = [
  {
    name: "F&B",
    image: "./assets/CUJC2qfXg1OTISW2j0NUAjrLHw.png",
    intro: "From chaos to control. Handle peak hours without breaking a sweat. Zero mistakes.",
    action: "Learn more",
    points: [
      "BIR-accredited",
      "Robust cost management",
      "Minimal staff training",
      "Integrated digital payments",
      "Actionable sales reports",
    ],
  },
  {
    name: "Retail",
    image: "./assets/FvNyD8eopjIkGahBcUL6rdGVSY.png",
    intro: "From clutter to clarity. Sell both online and offline with perfect inventory accuracy.",
    action: "Learn more",
    points: [
      "BIR-accredited",
      "Smart stock management",
      "Minimal staff training",
      "Integrated digital payments",
      "Actionable sales reports",
    ],
  },
  {
    name: "Service",
    image: "./assets/PKVIzYhMeEpXFCmFKgYjLvoOHw.png",
    intro: "From friction to flow. Keep schedules full and stress low: no doubleups, no chaos.",
    action: "Learn more",
    points: [
      "BIR-accredited",
      "Customer management",
      "Minimal staff training",
      "Integrated digital payments",
      "Actionable sales reports",
    ],
  },
  {
    name: "Enterprise",
    image: "./assets/YVgvN3VJ3IVZkX8jcNhS2zLYnk.png",
    intro: "From gaps to structure. Manage hundreds of outlets or franchises from one dashboard.",
    action: "Contact us",
    points: [
      "Enterprise support",
      "Priority feature request",
      "Custom developments",
      "Centralized management",
      "Dedicated API access",
    ],
  },
];

const reviews = [
  {
    author: "Reghz Raevole Gift Shoppe",
    quote:
      "After completing the training, I really appreciate the app because it provides comprehensive features including DTR, POS, cashiering, inventory, and reports. I'll give 5 stars.",
  },
  {
    author: "Hannah Esteves",
    quote:
      "Our training today went smoothly. Justin explained how to use the POS and back-office clearly and thoroughly. We're excited to use StoreHub for our business soon!",
  },
  {
    author: "Paulyn Patricia Pamintuan",
    quote:
      "Our training went smoothly and our concerns/questions was explained to us very well. It was easy to use compared to other POS that we've tried.",
  },
  {
    author: "Joanna D",
    quote:
      "Very comprehensive training by pleasant and very patient StoreHub employees. They answered all our questions patiently and completely.",
  },
  {
    author: "Kim Pena",
    quote:
      "Been using StoreHub for 2 years and never encountered issues with POS. The system is straightforward and easy to use.",
  },
  {
    author: "Admin Tartko",
    quote:
      "We are very pleased with the service provided by StoreHub. Smooth transaction and no major issues. Thank you for your excellent service.",
  },
];

const createFeatureCard = ({ icon, title, text }) => `
  <article class="feature-card reveal">
    <img src="${icon}" alt="" loading="lazy" />
    <div>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  </article>
`;

const createIndustryCard = ({ name, image, intro, action, points }) => `
  <article class="industry-card reveal" id="${name === "Enterprise" ? "enterprise" : ""}">
    <img src="${image}" alt="${name} business powered by StoreHub" loading="lazy" />
    <div class="industry-content">
      <h3>${name}</h3>
      <p>${intro}</p>
      <a class="learn-link" href="#demo">${action}</a>
      <ul class="industry-checks">
        ${points.map((point) => `<li>${point}</li>`).join("")}
      </ul>
    </div>
  </article>
`;

const createReviewCard = ({ author, quote }) => `
  <article class="review-card">
    <span class="review-score">5.0</span>
    <blockquote>${quote}</blockquote>
    <cite>${author}</cite>
  </article>
`;

const renderContent = () => {
  const featureGrid = document.querySelector("[data-feature-grid]");
  const industryGrid = document.querySelector("[data-industry-grid]");
  const reviewTrack = document.querySelector("[data-review-track]");

  featureGrid.innerHTML = features.map(createFeatureCard).join("");
  industryGrid.innerHTML = industries.map(createIndustryCard).join("");
  reviewTrack.innerHTML = [...reviews, ...reviews].map(createReviewCard).join("");
};

const setupNavigation = () => {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const closeMenu = () => {
    document.body.classList.remove("nav-open");
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    document.body.classList.toggle("nav-open", !isOpen);
    menu.classList.toggle("is-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      closeMenu();
    }
  });

  syncHeader();
};

const setupRevealAnimations = () => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
};

const setupDemoForm = () => {
  const form = document.querySelector(".demo-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Demo request ready";
    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1800);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderContent();
  setupNavigation();
  setupRevealAnimations();
  setupDemoForm();
});
