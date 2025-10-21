document.getElementById('menuToggle').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
});

// Simple animation on scroll
const sections = document.querySelectorAll(".section");
const revealOnScroll = () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    if (scrollY + window.innerHeight - 100 > section.offsetTop) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 0.6s ease-out";
});

revealOnScroll();
