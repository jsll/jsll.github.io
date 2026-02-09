# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Academic portfolio website for Jens Lundell (Assistant Professor in Robotics at University of Turku) built with Jekyll and the al-folio theme, hosted on GitHub Pages.

## Build & Development Commands

### Local Development
```bash
# Docker (recommended)
docker-compose up                    # Starts Jekyll server on port 8080 with live reload

# Native
bundle install
bundle exec jekyll serve             # Starts local server at http://localhost:4000
```

### Build
```bash
bundle exec jekyll build             # Output to _site/
```

### Code Formatting
```bash
npx prettier . --check               # Check formatting
npx prettier . --write               # Apply formatting
```

Prettier is configured for Liquid templates (via @shopify/prettier-plugin-liquid), HTML, JSON, and YAML. The CI will fail if formatting issues exist.

### CSS Purification
```bash
purgecss -c purgecss.config.js       # Remove unused CSS
```

## Architecture

### Content Structure
- **_pages/**: Markdown content pages (about.md, publications.md, cv.md, etc.)
- **_data/cv.yml**: Structured CV data rendered by cv layout
- **_bibliography/**: BibTeX files for publications (processed by jekyll-scholar)
- **_news/**: News/announcement items

### Templates
- **_layouts/**: Liquid template layouts (about, cv, bib, post, distill, etc.)
- **_includes/**: Reusable template components (header, footer, metadata, cv/, etc.)
- **_sass/**: SCSS stylesheets with theme support

### Assets
- **assets/js/**: JavaScript files for analytics, search, image galleries, charts
- **assets/css/**: Compiled CSS
- **assets/img/**, **assets/pdf/**: Static media files

### Configuration
- **_config.yml**: Main Jekyll configuration (site metadata, plugins, theme settings)
- **Gemfile**: Ruby dependencies (jekyll, jekyll-scholar, jekyll-feed, etc.)
- **package.json**: Node dependencies (prettier only)

## CI/CD Workflows

GitHub Actions in .github/workflows/:
- **deploy.yml**: Build and deploy to GitHub Pages on push to master
- **prettier.yml**: Enforce code formatting on PRs
- **broken-links.yml**: Validate links
- **axe.yml**: Accessibility testing
- **lighthouse-badger.yml**: Performance monitoring

## Key Patterns

- CV is data-driven: edit `_data/cv.yml` rather than raw HTML
- Publications use BibTeX: add entries to `_bibliography/` files
- News items are individual files in `_news/` with date-prefixed filenames
- Social links configured in `_data/socials.yml`
- Layouts use Liquid templating with Jekyll's front matter

## Dependencies

Requires Ruby with Bundler, optional: Docker, Node.js (for Prettier), Python (for Jupyter notebooks), ImageMagick (for image processing).
