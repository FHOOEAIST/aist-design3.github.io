# Homepage for the AIST Research Group

[Jekyll](https://jekyllrb.com/) website for the **AIST – Advanced Information Systems and Technology** research group at the University of Applied Sciences Upper Austria, Campus Hagenberg.

The site is built with Jekyll and deployed to GitHub Pages through a GitHub Actions workflow (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). The site is bilingual (German / English) using [jekyll-polyglot](https://github.com/untra/polyglot), and static full-text search is provided by [Pagefind](https://pagefind.app/).

**❗💥 Warning: Pushing to `main` triggers a deployment — changes go live shortly after! 💥❗**

Please test considerable changes in a local setup first.

## Local Development

### Prerequisites

- [Git](https://git-scm.com/) with [Git LFS](https://git-lfs.com/) (all images are
  tracked via LFS — see [Images & Git LFS](#images--git-lfs))
- [Ruby](https://www.ruby-lang.org/)

### Install Git and Clone the Repository

Get Git from [https://git-scm.com/](https://git-scm.com/) (or
[GitHub Desktop](https://desktop.github.com/)), then make sure Git LFS is enabled:

```bash
git lfs install
```

Clone the repository to your local machine:

```bash
git clone https://github.com/FHOOEAIST/aist.github.io.git
cd aist.github.io
```

## Install Bundler and Jekyll

```bash
gem install bundler # Install Bundler (if not already installed)
bundle install
```

## Start the Build System

Start the local development server with:

```bash
bundle exec jekyll serve
```

The site is then available at [http://127.0.0.1:4000/aist.github.io/](http://127.0.0.1:4000/aist.github.io/). Changes to Markdown and HTML files
are picked up automatically.

The Pagefind search index is **not** built by jekyll, so the search UI will be empty
locally. To try it locally you can run, after a build:

```bash
npx pagefind --site _site # or bunx if bun is preferred
```

# Internationalization

The site is bilingual via `jekyll-polyglot`, with **German as the default language** and English as the secondary language.

Conventions:
- **Collections** (`_posts`, `_projects`, `_publications`, `_theses`) are split into `de/` and `en/` subdirectories. Each file carries a `lang:` field.
- **Top-level pages** exist as a German version (`page.html`) and an English version (`page-en.html`).
- Translations of the *same* content are linked by a shared `page_id` (e.g. `news:my-post`, `projects:bambi`, `pub:...`, `thesis:...`). The language switcher uses this to jump between the DE and EN versions.

## News Posts

Blog-style news entries shown on the news page.

- **Location:** `_posts/{de,en}/YYYY-MM-DD-title.md`

```yaml
---
lang: de
title: Some News Post
date: 2024-09-07T11:05:15+02:00 # Optional, overrides the date in the filename
page_id: news:some-news-post
title_image: /assets/images/news/example_title.jpg
---

Markdown body of the news post...
```

## Projects

Project showcases. These appear in the project carousels on the home page (filtered by `category`) and on the projects listing (split into active / completed based on the end date).

- **Location:** `_projects/{de,en}/slug.md`

```yaml
---
lang: de
title: Bambi
logo: /assets/images/projects/Bambi_logo.png
background: /assets/images/projects/Bambi_background.jpg
category: cv            # ehealth | ml | cv
page_id: projects:bambi
permalink: /projects/bambi/  # optional
projects:
  - title: Bambi
    laufzeitStart: 01.04.2022   # DD.MM.YYYY
    laufzeitEnd: 30.04.2025
    partner: FH OÖ Media Interaction Lab, ...
    foerdergeber: Österreichische Forschungsförderungsgesellschaft FFG – AI4Green
    dissertant: <optional>
  - title: Bambi 2
    laufzeitStart: 01.05.2025
    laufzeitEnd: 30.04.2028
    partner: FH OÖ Media Interaction Lab, ...
    foerdergeber: Österreichische Forschungsförderungsgesellschaft FFG – AI4Green
    dissertant: <optional>
---

Markdown description for Bambi...

---

Markdown description for Bambi 2...
```


> The `project` layout splits the Markdown body on `---` and
> pairs each section with the corresponding entry in the `projects` list. This lets a
> single file describe multi-phase projects. The listing uses `laufzeitEnd`
> to decide whether a project is still active.

### Ordering

Both sections of the projects listing (active and completed) are sorted
alphabetically and case-insensitively. A leading `Projekt ` / `Project ` (with or
without a colon) is **ignored** for sorting, so `Projekt Wildschwein` sorts under
W rather than lumping every such project together under P. That key is computed
in [`_plugins/project_sort_title.rb`](_plugins/project_sort_title.rb) as
`sort_title`; nothing needs to be added to a project's front matter.

## Publications

Research papers, shown grouped by year with a category filter.

- **Location:** `_publications/{de,en}/YYYY-MM-DD-title.md` (dates typically use `12-31`)

```yaml
---
lang: de
page_id: pub:modeling-wildlife-accident-risk-with-gaussian-mixture-models
permalink: /publications/modeling-wildlife-accident-risk-with-gaussian-mixture-models/  # optional, used as anchor for search
date: 2024-12-31
title: Modeling Wildlife Accident Risk with Gaussian Mixture Models
reference: Praschl C., Schedl D., Stöckl A. "Modeling Wildlife Accident Risk with Gaussian Mixture Models", EUROCAST 2024.
categories: [ml, geo]   # one or more, see below
external_url: https://example.org/abstract-book.pdf
doi: https://doi.org/10.0000/example        # optional
attachment: /assets/.../paper.pdf            # optional
---

Abstract (Markdown)...
```

### Categories

A publication carries a **list** of categories — most sit at the intersection of
several research areas, e.g. a wildlife-detection paper is both `geo` and `cv`.
The dropdown filter is single-select and shows an entry whenever the picked
category appears anywhere in its list; the badges under each title are shortcuts
into that category.

| id        | Area                                |
| --------- | ----------------------------------- |
| `ehealth` | eHealth & Medical Informatics       |
| `cv`      | Computer Vision & Image Processing  |
| `ml`      | Machine Learning & Data Science     |
| `se`      | Software Engineering                |
| `pm`      | Process Mining & Process Analytics  |
| `geo`     | Remote Sensing, UAV & Geospatial    |
| `xr`      | Augmented & Virtual Reality         |

The list is defined once in [`_data/publication_categories.yml`](_data/publication_categories.yml)
(id, German/English full label for the dropdown, and a short label for the badges).
To add a category, add an entry there and assign it in the relevant publications —
nothing else hard-codes the taxonomy. Medical imaging work has no category of its
own; it is tagged `[ehealth, cv]`.

Both language pages render through
[`_includes/publication-filter.html`](_includes/publication-filter.html) (dropdown,
counts, filter behaviour) and
[`_includes/publication-list.html`](_includes/publication-list.html) (year-grouped
entries and badges), so `publications.html` and `publications-en.html` stay in sync.

## Theses
Bachelor/Master theses and dissertations, shown grouped by year and filterable by year and type.

- **Location:** `_theses/{de,en}/YYYY-student-title.md`

```yaml
---
lang: de
page_id: thesis:andreas-erhard-process-mining-...
permalink: /theses/andreas-erhard-process-mining-.../  # optional, used as anchor for search
date: 2023-12-31
title: Process Mining im Radiologiebereich
student: Andreas Erhard
thesis_type: master  # bachelor | master | dissertation -- shown as a label and used by the type filter
project_url: https://aist.fh-hagenberg.at/index.php/de/projekte/pica  # optional
---

Abstract (Markdown)...
```

# Team

Team members are listed from [`_data/team.yml`](_data/team.yml). Each member carries a `category:` (`professor` | `project_manager` | `researcher` | `student`, labels in [`_data/team_categories.yml`](_data/team_categories.yml)) that is shown after the name, and a `gender:` (`m` | `f`) that picks the German form of that label (neutral fallback without it); an optional `role:` (e.g. the study programme of a student employee) is shown next to it.

---

# Images & Git LFS

All binary image formats are tracked with [Git LFS](https://git-lfs.com/) (see
[`.gitattributes`](.gitattributes)):

Before cloning or committing images, make sure LFS is installed and initialized
(`git lfs install`). Image assets live under `assets/images/`, organized by use
(`team/`, `projects/`, `news/`, ...). Reference them in front matter and Markdown via their absolute path, e.g. `/assets/images/projects/Bambi_logo.png`.

# Deployment

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
