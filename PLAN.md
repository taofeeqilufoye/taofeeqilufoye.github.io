# Portfolio Site Plan

## Site

A responsive, single-column Jekyll portfolio for GitHub Pages, published from the repository root as a user site at `<github-username>.github.io`. It will include Home, About, Work Experience, and Contact pages, shared navigation and footer, SEO metadata, a sitemap, and a favicon.

## Content and design

- Use the supplied Amazon, Nigerian Air Force, SBAY Global Services, and Ericsson experience and metrics without adding claims.
- Use a clean, modern visual style with accessible contrast, system fonts, and a user-selectable light/dark theme.
- Do not publish an email address or mailto link. Mark the LinkedIn/profile link as a placeholder until supplied.
- Keep page content in Markdown with YAML front matter, separate from reusable Jekyll layouts and includes.

## Technical choices

- Use GitHub Pages-compatible Jekyll, plain HTML and CSS, and minimal JavaScript for theme selection.
- Leave `baseurl` empty and use Jekyll URL filters for internal links.
- Keep the complete site in the project root; no app framework, server, database, contact form backend, external trackers, or unnecessary dependencies.
- Include a README for editing content, local preview, and Lighthouse checks.

## Assumptions

- No reference websites were provided, so the design will follow the stated clean and modern preference.
- The GitHub username and LinkedIn URL are not yet supplied; they will remain clearly marked placeholders until provided.
- Light/dark theme choice will be available on the site, with the system color preference used as the initial theme.

## Verification

Check root-level GitHub Pages structure and internal links, then inspect the site at 375px and 1280px. Run available Jekyll build and Lighthouse checks; report any checks that cannot be run in this environment.