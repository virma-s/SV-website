/* Mobile navigation toggle. Progressive enhancement: without JS the menu
   links are still reachable from the footer on every page. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close on Escape, and return focus to the toggle.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when a link is followed or when the viewport grows past the breakpoint.
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  var mq = window.matchMedia('(min-width: 901px)');
  var onChange = function (e) { if (e.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', onChange);
  else mq.addListener(onChange);
})();
