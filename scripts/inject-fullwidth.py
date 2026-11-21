"""Inline the full-width toggle (fullwidth.css + fullwidth.js) into every built HTML page.

Usage: python3 scripts/inject-fullwidth.py <path-to-quartz-public-folder>
"""
import json
import pathlib
import sys

here = pathlib.Path(__file__).resolve().parent
css = (here / "fullwidth.css").read_text()
js = (here / "fullwidth.js").read_text()
css_js = json.dumps(css).replace("</", "<\\/")
snippet = (
    f"<style id=\"m243-wide-css\">{css}</style>"
    f"<script id=\"m243-wide-js\">window.__M243_WIDE_CSS={css_js};{js}</script>"
)

public = pathlib.Path(sys.argv[1])
count = 0
for page in public.rglob("*.html"):
    html = page.read_text(encoding="utf-8")
    if "m243-wide-css" in html or "</head>" not in html:
        continue
    page.write_text(html.replace("</head>", snippet + "</head>", 1), encoding="utf-8")
    count += 1
print(f"full-width toggle added to {count} pages")
