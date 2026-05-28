const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const filterTabs = document.querySelectorAll(".filter-tab");
const workCards = document.querySelectorAll(".work-card");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeFilter = tab.dataset.filter || "all";

    filterTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    workCards.forEach((card) => {
      const shouldShow = activeFilter === "all" || card.dataset.category === activeFilter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
