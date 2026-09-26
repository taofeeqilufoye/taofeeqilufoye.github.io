# Personal portfolio

A static Jekyll site for GitHub Pages. All site content and configuration live in this repository root.

## Update the content

- Replace **Your Name** in `_config.yml` and `index.md` with the name you want to publish.
- Edit `about.md`, `experience.md`, and `contact.md` in Markdown.
- Add your public LinkedIn URL to `contact.md` if you want to share it. This site intentionally does not publish an email address.
- Adjust colors, spacing, and responsive styles in `assets/css/styles.css`.
- The theme button switches between light and dark themes; by default, the site follows the visitor’s device preference and remembers a manual choice in that browser.

## Preview and build locally

Install Ruby and Jekyll if they are not already installed:

```sh
gem install jekyll
```

From the repository root, start a local preview:

```sh
jekyll serve
```

Open the local URL printed by Jekyll. To verify a production build:

```sh
jekyll build
```

Jekyll writes generated files to `_site/`; that output is ignored by Git. GitHub Pages builds this site directly, so no separate build command or application server is needed for publishing.

## Run Lighthouse

1. Start the local preview with `jekyll serve`.
2. Open the local site in Chrome.
3. Open Developer Tools, select **Lighthouse**, choose **Mobile** (and optionally Desktop), and generate a report.
4. Review Performance, Accessibility, Best Practices, and SEO. Aim for 90 or higher in each category.

## Publish with GitHub Pages

1. Create or use the repository named `taofeeqilufoye.github.io`.
2. Commit this site at the repository root and push the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. GitHub Pages serves the site at `https://taofeeqilufoye.github.io`.

`_config.yml` sets `baseurl` to an empty string for this GitHub user site. Internal navigation and asset links use Jekyll’s `relative_url` filter.