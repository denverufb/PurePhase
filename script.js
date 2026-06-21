const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealTargets = document.querySelectorAll(
  '.product-item, .values-content, .values-visual, .section-header'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('visible'));
}

document.querySelector('.signup-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  if (!input || !btn) return;

  const original = btn.textContent;
  btn.textContent = "You're on the preorder list!";
  btn.disabled = true;
  input.value = '';
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 3000);
});
