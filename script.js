/* =============================================
   SUMIT DESHMUKH — PORTFOLIO JAVASCRIPT
   Shared across all pages
   ============================================= */

/* ── Loader ── */
(function initLoader() {
  const loader = document.getElementById('loader');
  const percent = document.getElementById('loader-percent');
  const line = document.querySelector('.loader-line');
  let count = 0;

  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 12) + 3;
    if (count > 100) count = 100;
    percent.textContent = count + '%';
    line.style.width = count + '%';
    if (count === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        revealElements();
      }, 400);
    }
  }, 60);

  document.body.style.overflow = 'hidden';
})();


/* ── Custom Cursor ── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  (function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();
})();


/* ── Sticky Nav (scroll effect only — active link set in HTML per page) ── */
(function initNav() {
  const nav = document.getElementById('nav');
  // Pages other than home already have .scrolled; keep toggling for home
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60 || nav.classList.contains('scrolled'));
  });
})();


/* ── Mobile Menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}


/* ── Scroll Reveal ── */
function revealElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}
