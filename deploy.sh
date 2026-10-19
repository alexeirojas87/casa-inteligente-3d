#!/bin/bash
# Publishes dist/CasaInteligente to the gh-pages branch (GitHub Pages).
set -euo pipefail
cd "$(dirname "$0")"
REMOTE=$(git remote get-url origin)
OUT=dist/CasaInteligente
touch "$OUT/.nojekyll"
TMP=$(mktemp -d)
cp -R "$OUT/." "$TMP/"
rm -f "$TMP"/*.command "$TMP"/*.txt
cd "$TMP"
git init -q -b gh-pages
git add -A
git commit -qm "deploy: casa inteligente $(date +%Y-%m-%d)"
git push -qf "$REMOTE" gh-pages
rm -rf "$TMP"
echo "Published to gh-pages"
