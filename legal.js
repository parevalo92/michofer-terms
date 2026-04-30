// CURSOR GLOW
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  window.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

// REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ACTIVE SIDEBAR LINKS
const sections = document.querySelectorAll(".legal-card[id]");
const sidebarLinks = document.querySelectorAll(".legal-sidebar a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const id = entry.target.getAttribute("id");

    sidebarLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, {
  rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => sectionObserver.observe(section));