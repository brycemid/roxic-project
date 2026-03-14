(function () {
  'use strict';

  // Intro (741-style): ENTER dismisses and shows main site
  var intro = document.getElementById('intro');
  var introEnter = document.getElementById('intro-enter');
  if (intro && introEnter) {
    function hideIntro() {
      intro.classList.add('is-hidden');
      try { sessionStorage.setItem('roxic-intro-seen', '1'); } catch (e) {}
    }
    introEnter.addEventListener('click', hideIntro);
    intro.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') hideIntro();
    });
    // Optional: skip intro if they've already entered this session
    try {
      if (sessionStorage.getItem('roxic-intro-seen') === '1') hideIntro();
    } catch (e) {}
  }

  // Mobile menu
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !open);
      mobileNav.setAttribute('aria-hidden', open);
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Policies dropdown (desktop)
  var policiesBtn = document.querySelector('.has-dropdown button');
  var policiesMenu = document.getElementById('policies-menu');
  if (policiesBtn && policiesMenu) {
    policiesBtn.addEventListener('click', function () {
      var expanded = policiesBtn.getAttribute('aria-expanded') === 'true';
      policiesBtn.setAttribute('aria-expanded', !expanded);
      policiesMenu.hidden = expanded;
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.has-dropdown')) {
        policiesBtn.setAttribute('aria-expanded', 'false');
        policiesMenu.hidden = true;
      }
    });
  }

  // Cart drawer
  var cartBtn = document.querySelector('.cart-btn');
  var cartDrawer = document.getElementById('cart-drawer');
  var cartOverlay = document.getElementById('cart-overlay');
  var cartClose = document.querySelector('.cart-close');

  function openCart() {
    if (cartDrawer) cartDrawer.setAttribute('aria-hidden', 'false');
    if (cartOverlay) cartOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.setAttribute('aria-hidden', 'true');
    if (cartOverlay) cartOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Add to cart (placeholder — just open cart for now)
  document.querySelectorAll('.btn-add').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.product-card');
      if (card && card.classList.contains('sold-out')) return;
      openCart();
    });
  });

  // Escape to close cart
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCart();
  });
})();
