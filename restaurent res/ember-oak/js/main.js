/* ============================================
   EMBER & OAK — Main JavaScript
   js/main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── MOBILE MENU ── */
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  let menuOpen = false;

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    navLinks.classList.toggle('open', menuOpen);
    const spans = hamburger.querySelectorAll('span');
    if (spans[0]) spans[0].style.transform = menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '';
    if (spans[1]) spans[1].style.opacity = menuOpen ? '0' : '1';
    if (spans[2]) spans[2].style.transform = menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '';
  }

  window.closeMenu = function () {
    if (menuOpen) toggleMenu();
  };

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => observer.observe(r));
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPage)) link.classList.add('active');
  });

});

/* ── MENU TABS (used on menu page & index) ── */
function showTab(e, id) {
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  e.currentTarget.classList.add('active');
}

/* ── RESERVATION FORM ── */
function submitForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  const btn = e.target.querySelector('.form-submit');
  if (success) success.style.display = 'block';
  if (btn) {
    btn.textContent = 'Request Sent ✦';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  }
}
