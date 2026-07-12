/* ============================================================
   Sasha Su — portfolio. Shared interactive behavior for all pages.
   Expects window.I18N = { en: {...}, ru: {...} } to be defined
   by the page (or omitted on pages with no copy toggle).
   ============================================================ */

(function () {
  'use strict';

  /* ---------------- Language ---------------- */
  function detectBrowserLang() {
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || navigator.userLanguage || 'en'];
    for (var i = 0; i < langs.length; i++) {
      if (langs[i] && langs[i].toLowerCase().indexOf('ru') === 0) return 'ru';
    }
    return 'en';
  }
  function getLang() {
    try {
      var stored = localStorage.getItem('pf_lang');
      if (stored === 'ru' || stored === 'en') return stored;
    } catch (e) {}
    return detectBrowserLang();
  }
  function setLang(lang) {
    try { localStorage.setItem('pf_lang', lang); } catch (e) {}
    applyLang(lang);
  }
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('.js-lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
    var dict = (window.I18N && window.I18N[lang]) || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-cv-link]').forEach(function (el) {
      el.setAttribute('href', lang === 'ru' ? el.dataset.hrefRu : el.dataset.hrefEn);
    });
    document.querySelectorAll('[data-lang-swap]').forEach(function (fn) {});
    if (typeof window.onLangApplied === 'function') window.onLangApplied(lang);
  }
  function initLang() {
    document.querySelectorAll('.js-lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
    window.addEventListener('storage', function (e) {
      if (e.key === 'pf_lang') applyLang(e.newValue === 'ru' ? 'ru' : 'en');
    });
    applyLang(getLang());
  }

  /* ---------------- Mobile menu ---------------- */
  function initMobileMenu() {
    var burger = document.querySelector('.burger');
    var panel = document.querySelector('.nav-mobile-panel');
    if (!burger || !panel) return;
    burger.addEventListener('click', function () {
      var open = !burger.classList.contains('is-open');
      burger.classList.toggle('is-open', open);
      panel.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------------- Dropdowns (Work menu, desktop + mobile) ---------------- */
  function initDropdowns() {
    document.querySelectorAll('[data-dropdown]').forEach(function (root) {
      var btn = root.querySelector('[data-dropdown-btn]');
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !root.classList.contains('is-open');
        document.querySelectorAll('[data-dropdown].is-open').forEach(function (o) { o.classList.remove('is-open'); });
        root.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
    });
    document.addEventListener('click', function () {
      document.querySelectorAll('[data-dropdown].is-open').forEach(function (o) { o.classList.remove('is-open'); });
    });
  }

  /* ---------------- Tabs (TL;DR / Full case) ---------------- */
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(function (root) {
      var btns = root.querySelectorAll('[data-tab-btn]');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.getAttribute('data-tab-btn');
          btns.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
          document.querySelectorAll('[data-tab-panel]').forEach(function (p) {
            p.hidden = p.getAttribute('data-tab-panel') !== target;
          });
        });
      });
    });
  }

  /* ---------------- Accordions ---------------- */
  function initAccordions() {
    document.querySelectorAll('[data-accordion-btn]').forEach(function (btn) {
      var content = btn.parentElement.querySelector('[data-accordion-content]');
      var sign = btn.querySelector('[data-accordion-sign]');
      btn.addEventListener('click', function () {
        var open = !content.classList.contains('is-open');
        content.classList.toggle('is-open', open);
        if (sign) sign.textContent = open ? '\u2212' : '+';
        btn.setAttribute('aria-expanded', String(open));
      });
    });
  }

  /* ---------------- Barriers-style single toggle ---------------- */
  function initBarriers() {
    document.querySelectorAll('[data-barriers-btn]').forEach(function (btn) {
      var list = document.querySelector(btn.getAttribute('data-barriers-btn'));
      var circle = btn.querySelector('.circle');
      btn.addEventListener('click', function () {
        var open = !list.classList.contains('is-open');
        list.classList.toggle('is-open', open);
        if (circle) circle.textContent = open ? '\u2212' : '+';
      });
    });
  }

  /* ---------------- Generic slide carousel (loop, dots, prev/next) ---------------- */
  function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(function (root) {
      var track = root.querySelector('[data-carousel-track]');
      var slides = track ? Array.prototype.slice.call(track.children) : [];
      var dots = Array.prototype.slice.call(root.querySelectorAll('[data-carousel-dot]'));
      var caption = root.querySelector('[data-carousel-caption]');
      var captions = [];
      try { captions = JSON.parse(root.getAttribute('data-captions') || '[]'); } catch (e) {}
      var i = 0;
      function render() {
        track.style.transform = 'translateX(-' + (i * 100) + '%)';
        dots.forEach(function (d, di) { d.classList.toggle('is-active', di === i); });
        if (caption && captions[i] !== undefined) caption.textContent = captions[i];
      }
      root.querySelectorAll('[data-carousel-prev]').forEach(function (b) {
        b.addEventListener('click', function () { i = (i - 1 + slides.length) % slides.length; render(); });
      });
      root.querySelectorAll('[data-carousel-next]').forEach(function (b) {
        b.addEventListener('click', function () { i = (i + 1) % slides.length; render(); });
      });
      dots.forEach(function (d, di) { d.addEventListener('click', function () { i = di; render(); }); });
      render();
    });
  }

  /* ---------------- Clamped fade carousel (home project screens) ---------------- */
  function initFadeCarousels() {
    document.querySelectorAll('[data-fade-carousel]').forEach(function (root) {
      var imgs = Array.prototype.slice.call(root.querySelectorAll('[data-fade-slide]'));
      var dots = Array.prototype.slice.call(root.querySelectorAll('[data-fade-dot]'));
      var prevBtn = root.querySelector('[data-fade-prev]');
      var nextBtn = root.querySelector('[data-fade-next]');
      var i = 0;
      function render() {
        imgs.forEach(function (img, ii) { img.classList.toggle('is-active', ii === i); });
        dots.forEach(function (d, di) { d.classList.toggle('is-active', di === i); });
        if (prevBtn) prevBtn.hidden = i === 0;
        if (nextBtn) nextBtn.hidden = i === imgs.length - 1;
      }
      if (prevBtn) prevBtn.addEventListener('click', function () { i = Math.max(0, i - 1); render(); });
      if (nextBtn) nextBtn.addEventListener('click', function () { i = Math.min(imgs.length - 1, i + 1); render(); });
      render();
    });
  }

  /* ---------------- Compare slider (drag) ---------------- */
  function initCompareSliders() {
    document.querySelectorAll('[data-compare]').forEach(function (root) {
      var before = root.querySelector('.before-img');
      var handle = root.querySelector('.compare-handle');
      var dragging = false;
      function setPct(pct) {
        pct = Math.max(0, Math.min(100, pct));
        before.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
        handle.style.left = pct + '%';
      }
      function pctFromEvent(e) {
        var r = root.getBoundingClientRect();
        return ((e.clientX - r.left) / r.width) * 100;
      }
      root.addEventListener('pointerdown', function (e) {
        dragging = true;
        try { root.setPointerCapture(e.pointerId); } catch (err) {}
        setPct(pctFromEvent(e));
      });
      root.addEventListener('pointermove', function (e) { if (dragging) setPct(pctFromEvent(e)); });
      root.addEventListener('pointerup', function () { dragging = false; });
      root.addEventListener('pointercancel', function () { dragging = false; });
      setPct(50);
    });
  }

  /* ---------------- Expand/collapse image (Merck home screen) ---------------- */
  function initExpandImages() {
    document.querySelectorAll('[data-expand-image]').forEach(function (root) {
      var hint = root.querySelector('[data-expand-hint]');
      var open = false;
      function label() {
        var lang = getLang();
        return open ? (lang === 'ru' ? 'Свернуть' : 'Collapse') : (lang === 'ru' ? 'Нажмите, чтобы раскрыть' : 'Tap to expand');
      }
      function render() {
        root.classList.toggle('is-open', open);
        if (hint) hint.textContent = label();
      }
      root.addEventListener('click', function () { open = !open; render(); });
      window.onLangApplied = (function (prev) {
        return function (lang) { if (prev) prev(lang); render(); };
      })(window.onLangApplied);
      render();
    });
  }

  /* ---------------- Funnel accordion (Merck) ---------------- */
  function initFunnelToggle() {
    document.querySelectorAll('[data-funnel-toggle]').forEach(function (btn) {
      var panel = document.querySelector(btn.getAttribute('data-funnel-toggle'));
      var chevron = btn.querySelector('[data-funnel-chevron]');
      btn.addEventListener('click', function () {
        var open = panel.hidden;
        panel.hidden = !open;
        if (chevron) chevron.textContent = open ? '\u2013' : '+';
        btn.setAttribute('aria-expanded', String(open));
      });
    });
  }

  /* ---------------- Range-driven horizontal scroller ---------------- */
  function initRangeScrollers() {
    document.querySelectorAll('[data-scroller]').forEach(function (root) {
      var track = root.querySelector('[data-scroller-track]');
      var range = root.querySelector('[data-scroller-range]');
      if (!track || !range) return;
      range.addEventListener('input', function () {
        var max = track.scrollWidth - track.clientWidth;
        track.scrollLeft = (range.value / 100) * max;
      });
      track.addEventListener('scroll', function () {
        var max = track.scrollWidth - track.clientWidth;
        range.value = max > 0 ? (track.scrollLeft / max) * 100 : 0;
      });
    });
  }

  /* ---------------- Click-to-zoom overlay image ---------------- */
  function initZoomImages() {
    document.querySelectorAll('[data-zoom]').forEach(function (trigger) {
      var overlay = document.querySelector(trigger.getAttribute('data-zoom'));
      if (!overlay) return;
      trigger.addEventListener('click', function () { overlay.hidden = false; });
      overlay.addEventListener('click', function () { overlay.hidden = true; });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initMobileMenu();
    initDropdowns();
    initTabs();
    initAccordions();
    initBarriers();
    initCarousels();
    initFadeCarousels();
    initCompareSliders();
    initExpandImages();
    initFunnelToggle();
    initRangeScrollers();
    initZoomImages();
  });
})();
