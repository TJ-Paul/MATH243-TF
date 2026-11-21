// Adds a floating "Full width" toggle. The choice is remembered per browser.
(function () {
  var KEY = "m243-wide";
  var root = document.documentElement;
  try { if (localStorage.getItem(KEY) === "1") root.classList.add(KEY); } catch (e) {}

  function label(btn) {
    var on = root.classList.contains(KEY);
    btn.textContent = on ? "⇆ Show panels" : "⇔ Full width";
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
    btn.title = "Hide or show the side panels";
    btn.addEventListener("click", function () {
      var on = root.classList.toggle(KEY);
      try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
      label(btn);
    });
    label(btn);
    document.body.appendChild(btn);
  }

  // Quartz swaps page content without a full reload and fires "nav" each time.
  document.addEventListener("DOMContentLoaded", ensureButton);
  document.addEventListener("nav", ensureButton);
  ensureButton();
})();
