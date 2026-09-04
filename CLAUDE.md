# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Jekyll source for the AIST (Advanced Information Systems and Technology) research group website (FH Upper Austria, Campus Hagenberg), deployed to GitHub Pages.

**⚠️ Pushing to `main` triggers a live deployment via GitHub Actions — there is no staging.** Test non-trivial changes locally first.

## Commands

**⚠️ The Ruby/Jekyll toolchain lives in WSL, not on Windows.** There is no `ruby`, `bundle`, or `jekyll` on the Windows side — every command below has to be run through WSL, where the repo is mounted at `/mnt/c/public/git/_github/aist.github.io`:

```powershell
wsl -- bash -lc "cd /mnt/c/public/git/_github/aist.github.io && bundle exec jekyll serve"
```

For anything with awkward quoting, write a script into the scratchpad and run `wsl -- bash /mnt/c/.../script.sh` instead of fighting two layers of shell escaping.

```bash
git lfs install          # once, before cloning — all images are tracked via Git LFS
gem install bundler
bundle install
bundle exec jekyll serve # local dev server: http://127.0.0.1:4000/aist.github.io/
```

There is no test suite or linter configured. The closest thing to validation is a successful `jekyll build` plus manual review in the browser.

Pagefind search is not built by `jekyll serve`, so the search UI is empty in local dev. To test it locally, build first, then index:

```bash
bundle exec jekyll build
npx pagefind --site _site
```

Production builds (`.github/workflows/deploy.yml`) run with `JEKYLL_ENV=production` and a `--baseurl` flag, then run `pagefind` against `_site` before deploying. The workflow also runs nightly (`0 3 * * *`) and via `workflow_dispatch`, in addition to on every push to `main`.

## Architecture

### Bilingual content model (jekyll-polyglot)

German is the default language (`default_lang: de`), English is secondary. This affects nearly every content decision in the repo:

- **Collections** (`_posts`, `_projects`, `_publications`, `_theses`) are split into parallel `de/` and `en/` subdirectories; every document has a `lang:` field.
- **Top-level pages** exist twice: `page.html` (German) and `page-en.html` (English) — e.g. `projects.html` / `projects-en.html`.
- Translated pairs are linked by a shared `page_id` front-matter value (e.g. `news:my-post`, `projects:bambi`, `pub:...`, `thesis:...`). `_includes/language-switcher.html` uses this to jump between DE/EN versions of the same content.
- Small hook plugins in `_plugins/`:
  - `lang_to_locale.rb` copies front matter `lang` → `locale` after posts are read (paginate-v2 filters by `locale`, polyglot writes `lang`).
  - `img_baseurl.rb` rewrites bare `src="/..."` attributes in rendered HTML output to include `site.baseurl`, since not all image references go through Liquid's `relative_url` filter.
  - `project_sort_title.rb` derives `sort_title` on every project (title minus a leading `Projekt`/`Project`, with or without a colon) so the listings can sort projects by the name that distinguishes them rather than clumping a third of them under P.

### Content collections

Defined in `_config.yml` with default layouts. Front-matter shapes for each are documented with full examples in `README.md` (Internationalization / News / Projects / Publications / Theses sections) — read that before adding content rather than reverse-engineering from existing files. Key points:

- **Projects** (`_projects/{de,en}/slug.md`, layout `_layouts/project.html`) can describe *multiple project phases* in one file: the Markdown body is split on `---` (rendered as `<hr />`) and zipped with the `projects:` front-matter list, so section *N* of the body pairs with `projects[N]`'s metadata (dates, partner, funder). `category` (`ehealth` | `ml` | `cv`) drives the home-page carousels and the projects-listing filter; active vs. completed on the listing page is decided by whether `laufzeitEnd` is in the past.
- **Publications/Theses** use `output: false` (no standalone rendered page per entry) — they're listed/grouped by year on `publications.html` / `theses.html`, with an anchor `permalink` used for search/deep-linking.
- **Publication categories** are a *list* (`categories: [ml, geo]`), not the single `category` that projects use — most papers span several research areas. The taxonomy (ids plus DE/EN labels) lives only in `_data/publication_categories.yml`; both language pages are thin wrappers around `_includes/publication-filter.html` and `_includes/publication-list.html`, so a new category means editing the data file and the affected publications, nothing else.
- **Team** is not a collection; it's flat data in `_data/team.yml`, rendered directly from `team.html`.
- **Nav** (`_data/nav.yml`) drives the header dropdown menu in `_layouts/default.html`.

### Search

Pagefind is integrated as web components (`pagefind-modal`, `pagefind-config`) loaded in `_layouts/default.html`, indexing everything under `<main data-pagefind-body>`. The index is a post-build artifact (see Commands above) — it does not exist until `pagefind` has been run against `_site`, and isn't regenerated by `jekyll serve`.

### Images / Git LFS

All binary image formats are tracked via Git LFS (see `.gitattributes`). Assets live under `assets/images/`, organized by usage area (`team/`, `projects/`, `news/`, ...), and are referenced by absolute path (e.g. `/assets/images/projects/Bambi_logo.png`).

### Content provenance

Some content (news posts, team entries) is periodically added by an external scraper tool run outside this repo (see commits like "rerun scraper" / "scrape new news articles"). The scraper itself is not part of this codebase — only its output commits are.
