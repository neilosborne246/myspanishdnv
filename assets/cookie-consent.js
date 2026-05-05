/**
 * My Spanish DNV — GDPR Cookie Consent Banner
 * Self-contained, no dependencies.
 * Add to every page: <script src="/assets/cookie-consent.js" defer></script>
 *
 * Behaviour:
 *  - Shows banner on first visit (or after consent expires / is withdrawn).
 *  - "Accept" stores consent=granted in localStorage for 365 days and fires
 *    window.cookieConsentGranted so analytics/tag scripts can initialise.
 *  - "Decline" stores consent=denied for 60 days and fires
 *    window.cookieConsentDenied. Analytics scripts must check consent before loading.
 *  - A persistent "Cookie preferences" link can be added to the footer
 *    with class="cookie-prefs-link" — it will re-open the modal.
 *
 * Usage with Google Analytics / GTM:
 *   Add your GA initialisation inside the 'cookieConsentGranted' event listener
 *   OR use Google Consent Mode v2 and listen for that event.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'msdnv_cookie_consent';
  var CONSENT_DURATION_GRANTED = 365; // days
  var CONSENT_DURATION_DENIED  = 60;  // days

  /* ── Helpers ─────────────────────────────────────────────────── */

  function setConsent(value) {
    var expires = new Date();
    expires.setDate(expires.getDate() + (value === 'granted' ? CONSENT_DURATION_GRANTED : CONSENT_DURATION_DENIED));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: value, expires: expires.toISOString() }));
    } catch (e) {}
  }

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var stored = JSON.parse(raw);
      if (new Date(stored.expires) < new Date()) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return stored.value;
    } catch (e) {
      return null;
    }
  }

  function dispatch(eventName) {
    try {
      window.dispatchEvent(new CustomEvent(eventName));
    } catch (e) {}
  }

  /* ── CSS ─────────────────────────────────────────────────────── */

  function injectStyles() {
    if (document.getElementById('msdnv-cookie-css')) return;
    var style = document.createElement('style');
    style.id = 'msdnv-cookie-css';
    style.textContent = [
      '#msdnv-cookie-banner{',
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;',
        'background:#0c1930;color:#fff;',
        'padding:1.25rem 2rem;',
        'display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap;',
        'border-top:1px solid rgba(255,255,255,0.08);',
        'font-family:\'Inter\',system-ui,sans-serif;font-size:0.85rem;line-height:1.55;',
        'box-shadow:0 -4px 24px rgba(0,0,0,0.35);',
        'transform:translateY(100%);transition:transform 0.35s ease;',
      '}',
      '#msdnv-cookie-banner.visible{transform:translateY(0);}',
      '#msdnv-cookie-banner p{margin:0;color:rgba(255,255,255,0.75);max-width:680px;}',
      '#msdnv-cookie-banner a{color:#facf39;text-decoration:underline;text-underline-offset:2px;}',
      '#msdnv-cookie-banner a:hover{color:#fff;}',
      '.msdnv-cookie-actions{display:flex;gap:0.75rem;flex-shrink:0;flex-wrap:wrap;}',
      '.msdnv-cookie-btn{',
        'display:inline-block;padding:0.55rem 1.25rem;border-radius:999px;',
        'font-size:0.82rem;font-weight:500;cursor:pointer;border:none;',
        'font-family:inherit;transition:background 0.2s,color 0.2s;white-space:nowrap;',
      '}',
      '.msdnv-cookie-btn-accept{background:#be0011;color:#fff;}',
      '.msdnv-cookie-btn-accept:hover{background:#8c000d;}',
      '.msdnv-cookie-btn-decline{background:transparent;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.2);}',
      '.msdnv-cookie-btn-decline:hover{color:#fff;border-color:rgba(255,255,255,0.5);}',
      '@media(max-width:640px){',
        '#msdnv-cookie-banner{flex-direction:column;align-items:flex-start;padding:1.25rem 1.25rem 1.5rem;}',
        '.msdnv-cookie-actions{width:100%;}',
        '.msdnv-cookie-btn{flex:1;text-align:center;}',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  /* ── Banner HTML ─────────────────────────────────────────────── */

  function buildBanner() {
    var banner = document.createElement('div');
    banner.id = 'msdnv-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML =
      '<p>' +
        'We use cookies to understand how visitors use our site and to improve your experience. ' +
        'You can accept or decline non-essential cookies. ' +
        '<a href="/cookies/" rel="noopener">Cookie policy</a> &nbsp;·&nbsp; ' +
        '<a href="/privacy-policy/" rel="noopener">Privacy policy</a>' +
      '</p>' +
      '<div class="msdnv-cookie-actions">' +
        '<button class="msdnv-cookie-btn msdnv-cookie-btn-decline" id="msdnv-cookie-decline">Decline</button>' +
        '<button class="msdnv-cookie-btn msdnv-cookie-btn-accept" id="msdnv-cookie-accept">Accept cookies</button>' +
      '</div>';
    return banner;
  }

  /* ── Show / Hide ─────────────────────────────────────────────── */

  function showBanner() {
    injectStyles();
    var banner = document.getElementById('msdnv-cookie-banner');
    if (!banner) {
      banner = buildBanner();
      document.body.appendChild(banner);
      document.getElementById('msdnv-cookie-accept').addEventListener('click', onAccept);
      document.getElementById('msdnv-cookie-decline').addEventListener('click', onDecline);
    }
    // Slight delay so CSS transition fires
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.classList.add('visible');
      });
    });
  }

  function hideBanner() {
    var banner = document.getElementById('msdnv-cookie-banner');
    if (banner) {
      banner.classList.remove('visible');
      setTimeout(function () {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 400);
    }
  }

  /* ── Handlers ────────────────────────────────────────────────── */

  function onAccept() {
    setConsent('granted');
    hideBanner();
    dispatch('cookieConsentGranted');
  }

  function onDecline() {
    setConsent('denied');
    hideBanner();
    dispatch('cookieConsentDenied');
  }

  /* ── "Cookie preferences" links ─────────────────────────────── */
  // Any <a class="cookie-prefs-link"> in the page will re-open the banner.

  function bindPrefsLinks() {
    document.querySelectorAll('.cookie-prefs-link').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        showBanner();
      });
    });
  }

  /* ── Init ────────────────────────────────────────────────────── */

  function init() {
    var consent = getConsent();
    if (consent === 'granted') {
      dispatch('cookieConsentGranted');
    } else if (consent === 'denied') {
      dispatch('cookieConsentDenied');
    } else {
      // No recorded preference — show the banner
      showBanner();
    }
    bindPrefsLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
