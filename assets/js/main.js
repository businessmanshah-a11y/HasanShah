gsap.registerPlugin(ScrollTrigger);

// Navbar scroll behavior
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Animate all .fade-up elements
gsap.utils.toArray('.fade-up').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
  );
});

gsap.utils.toArray('.fade-left').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
  );
});

gsap.utils.toArray('.fade-right').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
  );
});

// Hero staggered entrance
gsap.fromTo('.hero-headline', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 });
gsap.fromTo('.hero-sub',      { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.7 });
gsap.fromTo('.hero-cta',      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.0 });

// Counter animations
animateCounters();

// Language toggle
const langToggle = document.getElementById('langToggle');
let isEn = false;
const translations = {
  fa: {
    'nav-about': 'درباره من', 'nav-services': 'خدمات',
    'nav-portfolio': 'نمونه کار', 'nav-form': 'دریافت رایگان',
  },
  en: {
    'nav-about': 'About', 'nav-services': 'Services',
    'nav-portfolio': 'Portfolio', 'nav-form': 'Get Free',
  }
};
langToggle.addEventListener('click', () => {
  isEn = !isEn;
  document.documentElement.lang = isEn ? 'en' : 'fa';
  document.documentElement.dir = isEn ? 'ltr' : 'rtl';
  document.body.style.fontFamily = isEn ? "var(--font-sans)" : "var(--font-fa)";
  langToggle.textContent = isEn ? 'FA' : 'EN';
  const t = isEn ? translations.en : translations.fa;
  document.querySelectorAll('.nav-links a').forEach((a, i) => {
    const keys = Object.values(t);
    if (keys[i]) a.textContent = keys[i];
  });
});
