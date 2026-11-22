#!/usr/bin/env python3
"""Regenerates notes.json, the list of notes the website shows.

Run it from the vault root after adding, renaming or deleting a note:
    python3 build-site-index.py
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
SKIP_DIRS = {"resources", ".git", ".obsidian", ".trash", ".github", "scripts"}
FILE_EXTS = (".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".pdf")
HOME = "index"


def natural_key(text):
    return [int(p) if p.isdigit() else p.lower() for p in re.split(r"(\d+)", text)]


notes = []
files = {}
for dirpath, dirnames, filenames in os.walk(ROOT):
    rel_dir = os.path.relpath(dirpath, ROOT)
    top = rel_dir.split(os.sep)[0]
    if rel_dir != "." and (top in SKIP_DIRS or top.startswith(".")):
        dirnames[:] = []
        continue
    for name in filenames:
        if name.lower().endswith(FILE_EXTS):
            files.setdefault(name, os.path.normpath(os.path.join(rel_dir, name)).replace(os.sep, "/"))
            continue
        if not name.endswith(".md") or name.lower() in {"readme.md", "untitled.md"}:
            continue
        rel = os.path.normpath(os.path.join(rel_dir, name[:-3])).replace(os.sep, "/")
        folder = "" if rel_dir == "." else rel_dir.replace(os.sep, "/")
        notes.append({"path": rel, "title": name[:-3], "folder": folder})

# Root notes first (00 ... before 99), then folders in name order; natural sort inside.
def order(n):
    if n["title"] == HOME and n["folder"] == "":
        return (-1, [], 0, [])
    root_last = n["folder"] == "" and n["title"].startswith("99")
    folder_rank = (0 if n["folder"] == "" and not root_last else 2 if root_last else 1)
    home_first = 0 if n["title"] == HOME else 1
    return (folder_rank, natural_key(n["folder"]), home_first, natural_key(n["title"]))

notes.sort(key=order)

with open(os.path.join(ROOT, "notes.json"), "w", encoding="utf-8") as f:
    json.dump({"notes": notes, "files": files}, f, ensure_ascii=False, indent=1)

print(f"notes.json written with {len(notes)} notes and {len(files)} images")
