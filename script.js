/**
 * Portfolio Website — Muhammad Ariel Ariadi
 * Vanilla JavaScript for interactivity, animations, and accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
  initNavbarScroll();
  initActiveNavHighlight();
});

/* ===========================
   Mobile Menu
   =========================== */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const overlay = document.getElementById('nav-overlay');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (!toggle || !menu) return;

  function openMenu() {
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on overlay click
  overlay.addEventListener('click', closeMenu);

  // Close on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
}

/* ===========================
   Scroll Animations (IntersectionObserver)
   =========================== */
function initScrollAnimations() {
  // Reveal sections
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // Staggered reveal for tech items
  const staggerElements = document.querySelectorAll('.reveal-stagger');
  const staggerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Calculate delay based on position within its parent grid
          const parent = entry.target.closest('.tech__grid');
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.reveal-stagger'));
            const i = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${i * 80}ms`;
          }
          entry.target.classList.add('visible');
          staggerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  staggerElements.forEach(el => staggerObserver.observe(el));
}

/* ===========================
   Navbar Scroll Effect
   =========================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check initial state
}

/* ===========================
   Active Navigation Highlight
   =========================== */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: `-${72}px 0px -50% 0px` }
  );

  sections.forEach(section => observer.observe(section));
}
