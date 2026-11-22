// Full-width toggle placed next to the light/dark button. The choice is remembered per browser.
(function () {
  var KEY = "m243-wide";
  var root = document.documentElement;
  try { if (localStorage.getItem(KEY) === "1") root.classList.add(KEY); } catch (e) {}

  var EXPAND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';
  var SHRINK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';

  function label(btn) {
    var on = root.classList.contains(KEY);
    btn.innerHTML = on ? SHRINK : EXPAND;
    btn.title = on ? "Show side panels" : "Full width";
    btn.setAttribute("aria-label", btn.title);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function ensureStyle() {
    // The site swaps <head> when moving between pages, so re-add the style if it was dropped.
    if (document.getElementById("m243-wide-css") || !window.__M243_WIDE_CSS) return;
    var style = document.createElement("style");
    style.id = "m243-wide-css";
    style.textContent = window.__M243_WIDE_CSS;
    document.head.appendChild(style);
  }

  function ensureButton() {
    ensureStyle();
    if (!document.body || document.getElementById("m243-wide-btn")) return;
    var btn = document.createElement("button");
    btn.id = "m243-wide-btn";
    btn.type = "button";
    btn.addEventListener("click", function () {
      var on = root.classList.toggle(KEY);
      try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
      label(btn);
    });
    label(btn);
    var anchor = document.querySelector(".readermode") || document.querySelector(".darkmode");
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(btn, anchor.nextSibling);
    else document.body.appendChild(btn);
  }

  // Quartz swaps page content without a full reload and fires "nav" each time.
  document.addEventListener("DOMContentLoaded", ensureButton);
  document.addEventListener("nav", ensureButton);
  ensureButton();
})();
