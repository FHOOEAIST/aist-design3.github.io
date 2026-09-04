#!/usr/bin/env bash
# Entrypoint for the local test container.
#
#   serve  (default) build the site + pagefind index, then serve it read-only
#   dev              jekyll serve with live rebuild (no search index)
#   build            build the site + pagefind index and exit
#
# Anything else is executed verbatim, e.g. `docker compose run --rm site bash`.
set -euo pipefail

BASEURL_ARGS=()
if [[ -n "${JEKYLL_BASEURL:-}" ]]; then
  BASEURL_ARGS=(--baseurl "${JEKYLL_BASEURL}")
fi

build_site() {
  echo "==> jekyll build (JEKYLL_ENV=${JEKYLL_ENV:-development})"
  bundle exec jekyll build "${BASEURL_ARGS[@]}"
  echo "==> pagefind index"
  pagefind --site _site
}

case "${1:-serve}" in
  serve)
    build_site
    echo "==> serving on http://localhost:${JEKYLL_PORT:-4000}${JEKYLL_BASEURL-/aist.github.io}/"
    # --skip-initial-build keeps the pagefind index that was just generated;
    # a rebuild would wipe _site/pagefind.
    exec bundle exec jekyll serve \
      --skip-initial-build --no-watch \
      --host 0.0.0.0 --port "${JEKYLL_PORT:-4000}" \
      "${BASEURL_ARGS[@]}"
    ;;
  dev)
    echo "==> jekyll serve --livereload (search index is not built in this mode)"
    exec bundle exec jekyll serve \
      --host 0.0.0.0 --port "${JEKYLL_PORT:-4000}" \
      --livereload --livereload-port 35729 --force_polling \
      "${BASEURL_ARGS[@]}"
    ;;
  build)
    build_site
    ;;
  *)
    exec "$@"
    ;;
esac
