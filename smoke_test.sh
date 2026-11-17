#!/bin/bash
# Usage: ./smoke_test.sh <URL> [fichier_resultat]
# Retourne 0 si PASSED, 1 si FAILED
URL="${1:-http://localhost:8081}"
OUT="${2:-smoke_result.txt}"
FAIL=0
: > "$OUT"

check() {
  local name="$1" path="$2" expected="$3"
  local code
  code=$(curl -s -o /tmp/body.txt -w "%{http_code}" "$URL$path")
  if [ "$code" = "$expected" ]; then
    echo "[PASSED] $name ($path -> HTTP $code)" | tee -a "$OUT"
  else
    echo "[FAILED] $name ($path -> HTTP $code, attendu $expected)" | tee -a "$OUT"
    FAIL=1
  fi
}

# Attendre que le conteneur demarre (max 30s)
for i in $(seq 1 15); do
  curl -s -o /dev/null "$URL" && break
  sleep 2
done

check "Page d'accueil"       "/"            200
check "Route SPA (cart)"     "/cart"        200
check "Fichier index.html"   "/index.html"  200

if grep -qi "<div id=\"root\"" /tmp/body.txt 2>/dev/null || curl -s "$URL" | grep -q 'id="root"'; then
  echo "[PASSED] Contenu React (#root) present" | tee -a "$OUT"
else
  echo "[FAILED] Contenu React (#root) absent" | tee -a "$OUT"
  FAIL=1
fi

if [ $FAIL -eq 0 ]; then echo "SMOKE RESULT: PASSED" | tee -a "$OUT"; else echo "SMOKE RESULT: FAILED" | tee -a "$OUT"; fi
exit $FAIL
