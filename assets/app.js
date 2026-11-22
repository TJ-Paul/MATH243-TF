/* Renders the Obsidian notes of this repository as a website.
   Supports wikilinks, ==highlights==, callouts (incl. collapsible), Mermaid and code highlighting. */
(() => {
  "use strict";

  // ---- site settings ----
  const HOME = "index";                       // note the site opens on
  const SITE = "MATH 243 Notes";              // suffix of the browser tab title
  const FOLDER_LABELS = { "Start": "Home & guide", "1 Probability": "Part 1 · Probability",
    "2 Statistics": "Part 2 · Statistics", "3 Exam Toolkit": "Part 3 · Exam toolkit",
    "4 TF Solutions": "Part 4 · TF solutions (read last)" };
  const NOTE_LABELS = { "index": "Home" };
  let files = {};            // image basename -> path
  let notes = [];            // [{path, title, folder}]
  const byName = new Map();  // lower-case title or path -> note
  const cache = new Map();   // path -> markdown text
  let currentPath = null;

  const $ = (sel) => document.querySelector(sel);
  const content = $("#content");

  // ---------- helpers ----------
  const slugify = (s) =>
    s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "");

  const fileUrl = (path) => path.split("/").map(encodeURIComponent).join("/") + ".md";
  const noteHref = (path, heading) =>
    "#/" + encodeURIComponent(path) + (heading ? "#" + slugify(heading) : "");
  const escapeHtml = (s) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function resolveNote(name) {
    const key = name.trim().replace(/\.md$/i, "").toLowerCase();
    return byName.get(key) || null;
  }

  function parseHash() {
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) return { path: HOME, anchor: "" };
    const i = raw.indexOf("#");
    const path = decodeURIComponent(i < 0 ? raw : raw.slice(0, i));
    const anchor = i < 0 ? "" : decodeURIComponent(raw.slice(i + 1));
    return { path: path || HOME, anchor };
  }

  async function getText(path) {
    if (cache.has(path)) return cache.get(path);
    const res = await fetch(fileUrl(path));
    if (!res.ok) throw new Error(res.status + " " + res.statusText);
    const text = await res.text();
    cache.set(path, text);
    return text;
  }

  // ---------- markdown setup ----------
  const highlight = {
    name: "mark", level: "inline",
    start(src) { const i = src.indexOf("=="); return i < 0 ? undefined : i; },
    tokenizer(src) {
      const m = /^==(?=\S)([\s\S]*?\S)==/.exec(src);
      if (m) return { type: "mark", raw: m[0], tokens: this.lexer.inlineTokens(m[1]) };
    },
    renderer(t) { return "<mark>" + this.parser.parseInline(t.tokens) + "</mark>"; },
  };

  const wikilink = {
    name: "wikilink", level: "inline",
    start(src) { const i = src.indexOf("[["); return i < 0 ? undefined : i; },
    tokenizer(src) {
      const m = /^!?\[\[([^\]|#]*)(?:#([^\]|]*))?(?:\\?\|([^\]]*))?\]\]/.exec(src);
      if (m) return { type: "wikilink", raw: m[0], embed: m[0][0] === "!", name: m[1], heading: m[2] || "", alias: m[3] || "" };
    },
    renderer(t) {
      const fname = t.name.trim();
      if (t.embed && /\.(png|jpe?g|gif|svg|webp)$/i.test(fname)) {
        const path = files[fname] || files[fname.split("/").pop()];
        if (!path) return `<span class="broken-link" title="Image not found">${escapeHtml(fname)}</span>`;
        const size = /^\d+(x\d+)?$/.test(t.alias) ? ` style="width:${t.alias.split("x")[0]}px"` : "";
        const alt = /^\d+(x\d+)?$/.test(t.alias) ? fname : (t.alias || fname);
        return `<img class="embed" src="${path.split("/").map(encodeURIComponent).join("/")}" alt="${escapeHtml(alt)}" loading="lazy"${size}>`;
      }
      const label = escapeHtml(t.alias || (t.name ? t.name + (t.heading ? " › " + t.heading : "") : t.heading));
      if (!t.name) return `<a href="${noteHref(currentPath, t.heading)}">${label}</a>`;
      const note = resolveNote(t.name);
      if (!note) return `<span class="broken-link" title="Note not found">${label}</span>`;
      return `<a href="${noteHref(note.path, t.heading)}">${label}</a>`;
    },
  };

  // ---------- LaTeX math ($...$ and $$...$$) rendered with KaTeX ----------
  function tex(src, display) {
    try { return katex.renderToString(src, { displayMode: display, throwOnError: false, strict: "ignore", output: "html" }); }
    catch (e) { return `<code>${escapeHtml(src)}</code>`; }
  }
  const mathBlock = {
    name: "mathBlock", level: "block",
    start(src) { const m = /(^|\n)[ \t]*\$\$/.exec(src); return m ? m.index + m[1].length : undefined; },
    tokenizer(src) {
      const m = /^[ \t]*\$\$([\s\S]+?)\$\$[ \t]*(?:\n|$)/.exec(src);
      if (m) return { type: "mathBlock", raw: m[0], text: m[1] };
    },
    renderer(t) { return `<div class="math-block">${tex(t.text.trim(), true)}</div>\n`; },
  };
  const mathInline = {
    name: "mathInline", level: "inline",
    start(src) { const i = src.indexOf("$"); return i < 0 ? undefined : i; },
    tokenizer(src) {
      let m = /^\$\$([\s\S]+?)\$\$/.exec(src);
      if (m) return { type: "mathInline", raw: m[0], text: m[1], display: true };
      m = /^\$(?![\s$])((?:\\.|[^\\$\n])+?)(?<!\s)\$(?!\d)/.exec(src);
      if (m) return { type: "mathInline", raw: m[0], text: m[1], display: false };
    },
    renderer(t) { return tex(t.text, t.display); },
  };

  marked.use({ gfm: true, breaks: true, extensions: [mathBlock, mathInline, highlight, wikilink] });

  // ---------- post-processing of rendered HTML ----------
  // Lucide icons (MIT licence, lucide.dev), drawn in the callout's colour.
  const svgIcon = (paths) =>
    `<svg class="callout-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  const ICON = {
    pin: '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    list: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  };
  const CALLOUT_ICONS = {
    important: ICON.pin, tip: ICON.bulb, warning: ICON.alert, caution: ICON.alert, example: ICON.pencil,
    note: ICON.file, info: ICON.file, question: ICON.help, success: ICON.check, abstract: ICON.list, summary: ICON.list,
  };

  function convertCallouts(root) {
    // Innermost first so nested callouts work.
    const quotes = [...root.querySelectorAll("blockquote")].reverse();
    for (const bq of quotes) {
      const first = bq.firstElementChild;
      if (!first || first.tagName !== "P") continue;
      const m = /^\s*\[!(\w+)\]([-+]?)\s*/.exec(first.innerHTML);
      if (!m) continue;
      const type = m[1].toLowerCase();
      const fold = m[2];
      let rest = first.innerHTML.slice(m[0].length);
      const br = rest.search(/<br\s*\/?>/i);
      let title = br < 0 ? rest : rest.slice(0, br);
      let remainder = br < 0 ? "" : rest.slice(br).replace(/^<br\s*\/?>\s*/i, "");
      if (!title.trim()) title = type.charAt(0).toUpperCase() + type.slice(1);

      const box = document.createElement(fold ? "details" : "div");
      box.className = "callout";
      box.dataset.type = type;
      if (fold === "+") box.open = true;
      const head = document.createElement(fold ? "summary" : "div");
      head.className = "callout-title";
      head.innerHTML = svgIcon(CALLOUT_ICONS[type] || ICON.file) + `<span class="callout-text">${title}</span>`;
      const body = document.createElement("div");
      body.className = "callout-body";
      if (remainder.trim()) { const p = document.createElement("p"); p.innerHTML = remainder; body.appendChild(p); }
      for (const el of [...bq.children].slice(1)) body.appendChild(el);
      box.append(head, body);
      bq.replaceWith(box);
    }
  }

  function addHeadingIds(root) {
    const seen = new Map();
    for (const h of root.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
      let id = slugify(h.textContent) || "section";
      const n = seen.get(id) || 0;
      seen.set(id, n + 1);
      if (n) id += "-" + n;
      h.id = id;
      if (h.tagName === "H2" || h.tagName === "H3") {
        const a = document.createElement("a");
        a.className = "hlink"; a.href = noteHref(currentPath) + "#" + id; a.textContent = "#";
        a.setAttribute("aria-label", "Link to this section");
        h.appendChild(a);
      }
    }
  }

  function wrapTables(root) {
    for (const t of root.querySelectorAll("table")) {
      const w = document.createElement("div"); w.className = "table-wrap";
      t.replaceWith(w); w.appendChild(t);
    }
  }

  function highlightCode(root) {
    for (const code of root.querySelectorAll("pre code")) {
      if (code.classList.contains("language-mermaid")) continue;
      try { hljs.highlightElement(code); } catch (e) { /* unknown language: leave plain */ }
    }
  }

  // ---------- mermaid ----------
  let mermaidSeq = 0;
  function isDark() { return document.documentElement.dataset.theme === "dark"; }
  function initMermaid() {
    mermaid.initialize({ startOnLoad: false, theme: isDark() ? "dark" : "default", securityLevel: "loose", fontFamily: "Inter, sans-serif" });
  }

  function prepareMermaid(root) {
    for (const code of root.querySelectorAll("pre code.language-mermaid")) {
      const box = document.createElement("div");
      box.className = "mermaid-box";
      box.dataset.src = code.textContent;
      code.parentElement.replaceWith(box);
    }
  }

  async function renderMermaid(scope) {
    const boxes = [...scope.querySelectorAll(".mermaid-box:not([data-done])")]
      .filter((b) => !b.closest("details:not([open])"));
    for (const box of boxes) {
      box.dataset.done = "1";
      try {
        const { svg } = await mermaid.render("mmd-" + ++mermaidSeq, box.dataset.src);
        box.innerHTML = svg;
      } catch (e) {
        box.classList.add("error");
        box.textContent = "Diagram could not be drawn: " + (e.message || e);
      }
    }
  }

  // ---------- page rendering ----------
  function buildSidebar() {
    const nav = $("#sidebar");
    const groups = new Map();
    for (const n of notes) {
      const g = n.folder || "Start";
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(n);
    }
    const label = (g) => FOLDER_LABELS[g] || g.replace(/^\d+\s*/, "");
    let html = "";
    for (const [g, list] of groups) {
      html += `<h4>${escapeHtml(label(g))}</h4>`;
      for (const n of list) {
        const t = NOTE_LABELS[n.title] || n.title.replace(/^(00|99)\s+/, "");
        html += `<a href="${noteHref(n.path)}" data-path="${escapeHtml(n.path)}">${escapeHtml(t)}</a>`;
      }
    }
    nav.innerHTML = html;
  }

  function markActive() {
    for (const a of document.querySelectorAll("#sidebar a")) a.classList.toggle("active", a.dataset.path === currentPath);
  }

  function buildToc() {
    const toc = $("#toc");
    const hs = [...content.querySelectorAll("h2, h3")];
    if (hs.length < 2) { toc.innerHTML = ""; return; }
    toc.innerHTML = "<h4>On this page</h4>" + hs.map((h) => {
      const text = h.textContent.replace(/#$/, "").trim();
      return `<a class="${h.tagName.toLowerCase()}" href="${noteHref(currentPath)}#${h.id}" data-id="${h.id}">${escapeHtml(text)}</a>`;
    }).join("");
  }

  function buildPager() {
    const i = notes.findIndex((n) => n.path === currentPath);
    const prev = notes[i - 1], next = notes[i + 1];
    $("#pager").innerHTML =
      (prev ? `<a class="prev" href="${noteHref(prev.path)}"><span class="dir">← Previous</span>${escapeHtml(NOTE_LABELS[prev.title] || prev.title)}</a>` : "") +
      (next ? `<a class="next" href="${noteHref(next.path)}"><span class="dir">Next →</span>${escapeHtml(NOTE_LABELS[next.title] || next.title)}</a>` : "");
  }

  function scrollToAnchor(anchor) {
    if (!anchor) { window.scrollTo(0, 0); return; }
    const el = document.getElementById(slugify(anchor)) || document.getElementById(anchor);
    if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
  }

  async function show() {
    const { path, anchor } = parseHash();
    const note = notes.find((n) => n.path === path) || resolveNote(path);
    closeSidebar();
    if (!note) {
      content.innerHTML = `<h1>Note not found</h1><p>No note is called “${escapeHtml(path)}”. <a href="#/">Go to the start page.</a></p>`;
      $("#toc").innerHTML = ""; $("#pager").innerHTML = "";
      return;
    }
    if (note.path === currentPath && content.dataset.ready) { scrollToAnchor(anchor); return; }

    currentPath = note.path;
    content.dataset.ready = "";
    content.innerHTML = '<p class="loading">Loading…</p>';
    let md;
    try { md = await getText(note.path); }
    catch (e) { content.innerHTML = `<h1>Could not load the note</h1><p>${escapeHtml(String(e))}</p>`; return; }
    if (currentPath !== note.path) return; // user navigated away meanwhile

    md = md.replace(/^---\n[\s\S]*?\n---\n/, "");      // front matter
    md = md.replace(/%%[\s\S]*?%%/g, "");               // Obsidian comments
    if (!/^#\s/m.test(md.split("\n").find((l) => l.trim()) || "")) md = `# ${note.title}\n\n` + md;

    content.innerHTML = marked.parse(md);
    convertCallouts(content);
    prepareMermaid(content);
    highlightCode(content);
    wrapTables(content);
    addHeadingIds(content);
    content.dataset.ready = "1";

    document.title = (NOTE_LABELS[note.title] || note.title.replace(/^(00|99)\s+/, "")) + " · " + SITE;
    markActive(); buildToc(); buildPager();
    scrollToAnchor(anchor);
    await renderMermaid(content);
    scrollToAnchor(anchor); // diagrams change the height; jump again
  }

  // render diagrams inside collapsible callouts when they are opened
  document.addEventListener("toggle", (e) => {
    if (e.target.matches && e.target.matches("details.callout") && e.target.open) renderMermaid(e.target);
  }, true);

  // ---------- table of contents highlight ----------
  const tocObserver = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      for (const a of document.querySelectorAll("#toc a")) a.classList.toggle("active", a.dataset.id === en.target.id);
    }
  }, { rootMargin: "-60px 0px -75% 0px" });
  new MutationObserver(() => {
    tocObserver.disconnect();
    for (const h of content.querySelectorAll("h2, h3")) tocObserver.observe(h);
  }).observe($("#toc"), { childList: true });

  // ---------- search ----------
  const searchBox = $("#search"), results = $("#search-results");
  let allLoaded = null;
  function loadAll() {
    if (!allLoaded) allLoaded = Promise.all(notes.map((n) => getText(n.path).catch(() => "")));
    return allLoaded;
  }
  function plain(md) {
    return md.replace(/```[\s\S]*?```/g, " ").replace(/\[\[([^\]|#]*)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/g, (_, a, b) => b || a)
      .replace(/[=*#>`_]|\[![a-z]+\][-+]?/g, "").replace(/\s+/g, " ");
  }
  let searchTimer;
  searchBox.addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(runSearch, 160); });
  searchBox.addEventListener("focus", () => { loadAll(); if (searchBox.value.trim()) runSearch(); });
  searchBox.addEventListener("keydown", (e) => {
    const items = [...results.querySelectorAll("a")];
    let i = items.findIndex((a) => a.classList.contains("active"));
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (items[i]) items[i].classList.remove("active");
      i = e.key === "ArrowDown" ? Math.min(items.length - 1, i + 1) : Math.max(0, i - 1);
      if (items[i]) { items[i].classList.add("active"); items[i].scrollIntoView({ block: "nearest" }); }
    } else if (e.key === "Enter") {
      const a = items[Math.max(0, i)]; if (a) { location.hash = a.getAttribute("href"); hideResults(); searchBox.blur(); }
    } else if (e.key === "Escape") { hideResults(); searchBox.blur(); }
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-wrap")) hideResults(); });
  results.addEventListener("click", (e) => { if (e.target.closest("a")) { hideResults(); searchBox.value = ""; } });
  function hideResults() { results.hidden = true; }

  async function runSearch() {
    const q = searchBox.value.trim().toLowerCase();
    if (q.length < 2) { hideResults(); return; }
    const texts = await loadAll();
    const terms = q.split(/\s+/);
    const hits = [];
    notes.forEach((n, i) => {
      const body = plain(texts[i]); const low = body.toLowerCase(); const title = n.title.toLowerCase();
      if (!terms.every((t) => low.includes(t) || title.includes(t))) return;
      let score = terms.reduce((s, t) => s + (title.includes(t) ? 50 : 0) + Math.min(20, low.split(t).length - 1), 0);
      // nearest heading to the first match, so the link jumps there
      const md = texts[i]; const pos = md.toLowerCase().indexOf(terms[0]);
      let heading = "";
      if (pos > 0) { const before = md.slice(0, pos).match(/^#{2,4}\s+(.+)$/gm); if (before) heading = before[before.length - 1].replace(/^#+\s+/, ""); }
      const at = low.indexOf(terms[0]);
      const snip = at < 0 ? body.slice(0, 120) : (at > 50 ? "…" : "") + body.slice(Math.max(0, at - 50), at + 90) + "…";
      hits.push({ n, score, heading, snip });
    });
    hits.sort((a, b) => b.score - a.score);
    const mark = (s) => { let h = escapeHtml(s); for (const t of terms) h = h.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), (m) => `<mark>${m}</mark>`); return h; };
    results.innerHTML = hits.length
      ? hits.slice(0, 12).map((h) =>
          `<a href="${noteHref(h.n.path, h.heading)}"><div class="r-title">${escapeHtml(h.n.title)}${h.heading ? " › " + escapeHtml(h.heading.replace(/[=*]/g, "")) : ""}</div><div class="r-snip">${mark(h.snip)}</div></a>`).join("")
      : `<div class="r-empty">Nothing found for “${escapeHtml(q)}”.</div>`;
    results.hidden = false;
  }

  // ---------- theme ----------
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    $("#hl-light").disabled = t === "dark";
    $("#hl-dark").disabled = t !== "dark";
  }
  let stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) { /* storage blocked */ }
  applyTheme(stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  $("#theme-btn").addEventListener("click", () => {
    const t = isDark() ? "light" : "dark";
    applyTheme(t);
    try { localStorage.setItem("theme", t); } catch (e) { /* ignore */ }
    initMermaid();
    for (const b of content.querySelectorAll(".mermaid-box")) { delete b.dataset.done; b.classList.remove("error"); }
    renderMermaid(content);
  });

  // ---------- mobile sidebar ----------
  function closeSidebar() { $("#sidebar").classList.remove("open"); $("#scrim").hidden = true; }
  const isPhone = () => matchMedia("(max-width: 820px)").matches;
  function setPanel(cls, hide) {
    document.body.classList.toggle(cls, hide);
    try { localStorage.setItem(cls, hide ? "1" : ""); } catch (e) { /* ignore */ }
  }
  // One button: on a phone it opens the notes menu; on a wider screen it
  // hides the left panel for a full-width reading view (or brings it back).
  function togglePanels() {
    if (isPhone()) {
      const open = !$("#sidebar").classList.contains("open");
      $("#sidebar").classList.toggle("open", open); $("#scrim").hidden = !open;
      return;
    }
    setPanel("hide-left", !document.body.classList.contains("hide-left"));
  }
  try { if (localStorage.getItem("hide-left")) document.body.classList.add("hide-left"); } catch (e) { /* ignore */ }
  $("#menu-btn").addEventListener("click", togglePanels);
  // keyboard: [ hides / restores the left panel
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || (e.target.closest && e.target.closest("input, textarea"))) return;
    if (e.key === "[") togglePanels();
  });
  $("#scrim").addEventListener("click", closeSidebar);

  // ---------- start ----------
  async function start() {
    initMermaid();
    try {
      const data = await (await fetch("notes.json", { cache: "no-cache" })).json();
      notes = Array.isArray(data) ? data : data.notes;
      files = Array.isArray(data) ? {} : (data.files || {});
    } catch (e) {
      content.innerHTML = location.protocol === "file:"
        ? "<h1>Open this through a local server</h1><p>Browsers don't let a page opened by double-click read other files. In this folder, run <code>python3 -m http.server</code> and open <a href=\"http://localhost:8000\">http://localhost:8000</a>.</p>"
        : "<h1>Could not load notes.json</h1><p>Run <code>python3 build-site-index.py</code> in the repository and push again.</p>";
      return;
    }
    for (const n of notes) { byName.set(n.title.toLowerCase(), n); byName.set(n.path.toLowerCase(), n); }
    buildSidebar();
    window.addEventListener("hashchange", show);
    show();
  }
  start();
})();
