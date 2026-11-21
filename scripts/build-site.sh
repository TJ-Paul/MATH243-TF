#!/usr/bin/env bash
# Builds the notes into a website locally and serves it at http://localhost:8080
# Requirements: git and Node.js 22 or newer.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$ROOT/.quartz-build"

if [ ! -d "$WORK" ]; then
  git clone --depth 1 --branch v4 https://github.com/jackyzha0/quartz.git "$WORK"
  (cd "$WORK" && npm ci)
fi

rm -rf "$WORK/content"
mkdir -p "$WORK/content"
rsync -a \
  --exclude '.git' --exclude '.github' --exclude '.obsidian' --exclude '.quartz-build' \
  --exclude 'scripts' --exclude 'README.md' --exclude '.DS_Store' \
  "$ROOT/" "$WORK/content/"

sed -i.bak 's|pageTitle: ".*"|pageTitle: "MATH 243 Term Final Guide"|' "$WORK/quartz.config.ts"
sed -i.bak '/Component\.Graph()/d' "$WORK/quartz.layout.ts"

cd "$WORK"
npx quartz build
python3 "$ROOT/scripts/inject-fullwidth.py" "$WORK/public"
echo "Open http://localhost:8080 (press Ctrl+C to stop)"
npx --yes serve public --listen 8080
