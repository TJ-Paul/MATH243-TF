# MATH 243 — Term Final Guide

Problem-focused notes for **MATH 243 (Probability and Statistics), L-2/T-2 CSE**, covering every question from the last five term finals, with full solutions of the 2022-23 and 2023-24 papers.

**Read online:** [https://tj-paul.github.io/MATH243-TF/](https://tj-paul.github.io/MATH243-TF/#/)

Use the panel button (top-left) or press `[` to hide the side panel for a full-width reading view.

## Read offline

1. Download the repo: **Code → Download ZIP** on GitHub, then unzip it. You can also use `git clone`.
2. Open a terminal in the unzipped folder and start a small local server:

   ```bash
   python3 -m http.server
   ```

3. Open **http://localhost:8000** in your browser. Press Ctrl+C in the terminal when you're done.

Double-clicking `index.html` won't work, because browsers block a page opened from disk from reading the notes. The first visit also needs internet, to load fonts, the math renderer and the diagram library.

## Updating the site

After editing a note, just commit and push. The site updates in a minute or two.

If you **add, rename or delete** a note or image, rebuild the note list before committing:

```bash
python3 build-site-index.py
```

Then commit the updated `notes.json` along with your notes.
